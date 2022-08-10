import React from 'react'
import Link from 'next/link'
//import styles from '././styles/Home.module.css'
const Navbar = () => {
  return (
    <div>
        <nav >
        <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/About"><li>About</li></Link>
        <Link href="/Contact"><li>Contact</li></Link>
        <Link href="/Blogs"><li>Blogs</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar