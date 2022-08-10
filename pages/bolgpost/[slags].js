import React, { useEffect, useState } from 'react'
import {useRouter} from "next/router"
const slags = () => {
  // Step 1 : Find The file corresponding to the slug 
  // Step 2 : populate Them inside the page
  const [blog,setblog] = useState()
    const router = useRouter()
    const slug = router.query.slags
    console.log(slug)
    useEffect(()=>{
      if (!router.isReady) return;
      console.log("Running")
      fetch(`http://localhost:3000/api/blogss?slug=${slug}`).then((a)=>{
        return a.json()
      }).then((data)=>{
        console.log(data)
        setblog(data)
      })
    },[router.isReady])
  return (
    <div>
      <h1>{blog && blog.title}</h1>
      <hr/>
      <div>
      {blog && blog.content}
      </div>
      <h2>Slug is {blog && blog.slug}</h2>
      <h2>Author is {blog && blog.author}</h2>
    </div>
  )
}

export default slags