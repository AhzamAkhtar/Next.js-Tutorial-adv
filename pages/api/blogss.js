import * as fs from 'fs'
/*export default function handler(req,res){
    fs.readFile("./comments/newdata.json","utf-8",(err,data)=>{
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}*/
// how to use = http://localhost:3000/api/blogss?slug=newdata2
export default function handler(req,res){
    fs.readFile(`./comments/${req.query.slug}.json`,"utf-8",(err,data)=>{
        if(err){
            res.status(500).json({error:"Internal Server Error"})
        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}