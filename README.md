# rt-ui

## 这是一个工具库+组件库，包含

### 1、组件
### 2、常用hooks
### 3、一些api


一些问题
1、unplugin-vue-define-options  这个是为了想使用setup语法又不想写两个script标签（比如需要给组件添加name的情况下）。全局安装
2、@vitejs/plugin-vue插件是为了解析后缀为.vue文件的
3、components/index.ts文件那个ts报错 还没解决 ！！！！
4、withInstall方法的作用？有的时候我们使用组件的时候想要直直接使用 app.use()挂载整个组件库,其实使用 app.use()的时候它会调用传入参数的 install 方法,因此首先我们给每个组件添加一个 install 方法---
5、unplugin-vue-define-options, vite.config.ts引入的时候会报红(components/vite.config.ts。paly/vite.config.ts 都有这个问题)，使用// @ts-ignore。然后在tsconfig.json里要配置
"types": ["unplugin-vue-define-options/macros-global" /* ... */]。不然使用不起！！！！版本不对？文档也看不到，element-plus上没看到安装这个插件
下来需要详细了解一下这个插件
 6、为了按需引入。（默认的vite打包是将所有css打包成一个文件的，看看vite可以配置成按需不，不然不科学），所以打包使用的是gulp


TODO : 1. withInstall方法提取出来
  2、 less换成scss
  3、 把onMounted conputed等方法全局导入---不得行，暂时放弃
  4、写一个脚本 ，使用命令行生成组件 + paly + 导出等等---是否可以使用gulp