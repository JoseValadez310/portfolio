import styles from '../styles/Home.module.css'
import Head from 'next/head'
const About = () => {
    return ( 
    <>
    <Head>
      <title>Learner | About</title>
      <meta name='keywords' content='next.js home page'/>
    </Head>
    <div className = {styles.layout}>
        <h1> Hello my name is Jose Valadez</h1>
        <p> I will be documenting everything I'll be learning on my ipad</p>
    </div>
    </>
    );
}

export default About ;
