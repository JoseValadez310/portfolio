import styles from '../../styles/Home.module.css'
import Head from 'next/head'


//this function will run at build time 

/*export const getStaticPros = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        // give this props a vaule and we can pass in portperties and values that we want to use in the compnenet as a prop
        props: {user: data[3]}
    }

}

*<h1>Different Names</h1>
            {user.map(users => (
                <div key = {users.id}>
                    <a>
                        <h1>
                            {users.name}
                        </h1>
                    </a>
                    </div>
            ))}
*/
const Name = () => {

    return (  
    <>
        <Head>
        <title>Learner | Names</title>
        <meta name='keywords' content='next.js home page'/>
        </Head>

        <div className= {styles.layout}>
        
        </div>
    </>
    );
}

export default Name;