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
                <p>
                    I considered myself to be an amateur web developer. I began my journey roughly around 2 years ago but for awhile, I felt stuck in tutorial hell. I told myself that I needed to know eveything before I could start developing. That devious mindset only created set-back after set-back. 
                </p>
                <p>
                    I simply thought that was the only way until I soon figured out that getting a hands on experince was worth than the picture itself. My mindset took a 180 and since then, I've created my major project with many other ideas to come.   
                </p>

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