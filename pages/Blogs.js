import * as fs from 'fs'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Blogs = (props) => {
  const [blogs,setblogs] = useState(props.allBlogs)
  //console.log(props)
  // Old Way , Now Doing With getServerSideProps  
  /*useEffect(()=>{
    console.log("Running")
    fetch("http://localhost:3000/api/fetchallblog").then((a)=>{
      return a.json()
    }).then((data)=>{
      //console.log(data)
      setblogs(data)
    })
  },[])*/
// Step 1 : Collect all the files from blogdata dorectory
// Step 2 : Iterate through the and display them
  return (
    <div>
    <h1>POPULAR BLOGS</h1>
    {blogs.map((items_data)=>{
      return(
        <>
        <div className='blogItems'>
        <Link href={`/bolgpost/${items_data.slug}`}>
        <h3><a>{items_data.title}</a></h3>
        </Link>
          <p> {items_data.content}</p>
        </div>
        </>
      )
    })}
        <div className='blogs'>
      </div>
    </div>
  )
}

/*export async function getServerSideProps(context){
  let data = await fetch("http://localhost:3000/api/fetchallblog")
  let allBlogs = await data.json()
  return{
    props:{allBlogs}
  }
}*/

export async function getStaticProps(context){
  let data = await fs.promises.readdir("comments")
  let myfile
  let allBlogs = []
  for(let index=0 ;index<data.length;index++){
    const item = data[index]
    myfile = await fs.promises.readFile(('comments/'+item),'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }
  return{
    props:{allBlogs}
  }
}

export default Blogs