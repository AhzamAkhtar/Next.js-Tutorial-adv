import React, { useEffect, useState } from 'react'
import Link from 'next/link'
const Blogs = () => {
  const [blogs,setblogs] = useState([])
  useEffect(()=>{
    console.log("Running")
    fetch("http://localhost:3000/api/fetchallblog").then((a)=>{
      return a.json()
    }).then((data)=>{
      console.log(data)
      setblogs(data)
    })
  },[])
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

export default Blogs