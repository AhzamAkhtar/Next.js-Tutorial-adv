import * as fs from "fs"

export default async function handler(req,res){
    let data = await fs.promises.readdir("comments")
    let myfile
    let allblogs = []
    for(let index=0;index<data.length;index++){
        const item = data[index]
        console.log(item)
        myfile = await fs.promises.readFile(('comments/' + item),"utf-8")
        console.log(myfile)
        allblogs.push(JSON.parse(myfile))
    }
    res.status(200).json(allblogs)
}