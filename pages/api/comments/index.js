import { comments } from "../../../comments/comments";
import { data } from "../../../comments/data";

export default function handler(req,res){
    res.status(200).json(data)
    console.log(typeof data)
} 