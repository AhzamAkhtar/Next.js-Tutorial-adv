import * as fs from 'fs'
export  default async function handler(req,res){
    if(req.method=== "POST"){
        console.log(req.body)
        const data = await fs.promises.readdir("Contactdata")
        console.log(data)
        fs.writeFile(`Contactdata/${data.length+1}.json`,JSON.stringify(req.body),()=>{})
        res.status(200).json(["Post Rrquest"])
    }
    else{
        res.status(200).json(["allBlos"])
    }
}