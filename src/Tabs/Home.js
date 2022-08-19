import '../Styles/Home.css'

const Home = () => {
    return (
        <article className="home-section">

            <section  className = 'hero-wrapper'> 
                <h1 className = 'main-text'>My name is Jose Valadez</h1>    
                <p className = 'sub-text'> Welcome To My Portfolio.</p>   
            </section>

            <section className = "story-overlook">
                <h1>
                    Story
                </h1>
            </section>

            <section className = "works-overlook">
                <h1>
                    works
                </h1>
            </section>

            <section className = "resume-overlook">
                <h1>
                    resume
                </h1>
            </section>

            <section className = "contact">
                <h1>
                    contact
                </h1>
            </section>

        </article>

       
    )
}

export default Home