import * as fs from 'fs'
import React, { useEffect, useState } from 'react'
import {useRouter} from "next/router"
const Slags = (props) => {
  //console.log(props)
  //console.log(props)
  // Step 1 : Find The file corresponding to the slug 
  // Step 2 : populate Them inside the page
  const [blog,setblog] = useState(props.myBlog)
  // Now Doinmg With getServerSideProps
    /*const router = useRouter()
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
    },[router.isReady])*/
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
/*export async function getServerSideProps(context){
  console.log(context.query.slags)
  const slug = context.query.slags
  let data = await fetch(`http://localhost:3000/api/blogss?slug=${slug}`)
  let myBlog = await data.json()
  return{
    props:{myBlog}
  }
}*/

export async function getStaticPaths(){
  return{
    paths:[
      {params:{slags:"comments"}},
      {params:{slags:"data"}},
      {params:{slags:"data2"}},
      {params:{slags:"data3"}},
      {params:{slags:"newdata"}},
      {params:{slags:"newdata2"}}
    ],
    fallback:true
  }
}

export async function getStaticProps(context){
  const {slags} = context.params
  let myBlog = await fs.promises.readFile(`comments/${slags}.json`,'utf-8')
  return{
    props:{myBlog:JSON.parse(myBlog)},
  }
}

export default Slags