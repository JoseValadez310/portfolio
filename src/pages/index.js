import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
     <h1> Hello and Welcome to my learning experience</h1>
     <p> I will be learning my newest framework of a javascript framework named Next.js</p>
   
    </>
  )
}
