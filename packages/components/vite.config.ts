import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
//https://github.com/sxzz/unplugin-vue-macros/issues/266
// @ts-expect-error
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue",/\.less/],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../rtui/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../rtui/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    dts({
    entryRoot: "./src",
    outputDir: ["../rtui/es/src", "../rtui/lib/src"],
    //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
    tsConfigFilePath: "../../tsconfig.json",
    }),
    DefineOptions(),
    {
      name:'style',
      generateBundle(config,bundle){
        const keys = Object.keys(bundle);
        for(const key of keys){
          const bundler:any  = bundle[key as any]
          this.emitFile({
            type:'asset',
            fileName:key,
            source:bundler.code.replace(/\.less/,".css")
          })
        }
      }
    },
   
  ]
});
