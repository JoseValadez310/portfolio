import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function NotFound () {

    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[]

    )

    return (  
        <>
        <Head>
          <title>404 Not Found</title>
          <meta name='keywords' content='next.js home page'/>
        </Head>
        <div className = {styles.layout}>
            <h1> Ooops...</h1>
            <strong>
                That Page can not be found!
            </strong>
            <br></br>
            <Link href = "/"> <button>Let's return home</button></Link>

        </div>
        </>
    );
}

export default NotFound ;

//custom 404 page
// useRouter from next can allows us to manually send the user to different locations 