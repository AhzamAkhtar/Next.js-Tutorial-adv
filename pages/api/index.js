/*import * as fs from 'fs'
import "./how-to-learn-js.json"
export default function handler(req,res){
  fs.readFile("./how-to-learn-js.json",(err,data)=>{
    console.log(data)
  })
  res.status(200).json({name : "Harry Bhai"})
}
*/
import * as fs from 'fs'
 export default async function handler(req,res){
    fs.readFile('./comments/data2.js','utf-8',(err,data)=>{
     console.log(data)
  })
  res.status(200).json({name: "harry"})
}