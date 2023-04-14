import fs from "fs";
import {resolve} from "path"
import {pkgPath} from "./paths"
const stayFile = ['package.json','README.md'];
console.log(pkgPath,'路径-------------------------')
const delPath = async (path:string)=>{
    let files:string[] = [];
    if(fs.existsSync(path)){
        files = fs.readdirSync(path)

        files.forEach(async (file)=>{
            let curPath = resolve(path,file);
            if(fs.statSync(curPath).isDirectory()){
                if(file != "node_modules") await delPath(curPath)
            }else{
                //删除文件
                if(!stayFile.includes(file)){
                    fs.unlinkSync(curPath)
                }
            }
        })
        if(path != `${pkgPath}/rtui`) fs.rmdirSync(path)
    }
}
export default delPath