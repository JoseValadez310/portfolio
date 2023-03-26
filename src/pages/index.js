
import Head from 'next/head'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Learner | Home</title>
      <meta name='keywords' content='next.js home page'/>
    </Head>
    <div className = {styles.layout}>
     <h1> Hello and Welcome to my learning experience</h1>
     <p> I will be learning my newest framework of a javascript framework named Next.js</p>
    </div>
    </>
  )
}
