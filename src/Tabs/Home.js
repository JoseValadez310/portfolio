import '../Styles/Home.css'
import Nav from '../Components/Nav';
import { useRef, useState, useEffect } from 'react'
 import { useInView } from 'react-intersection-observer';


const Home = () => {

    
        const {ref: story , inView: storyView } = useInView()
            console.log(storyView)
    
        const {ref: contact , inView: contactView} = useInView()
            console.log(contactView)
        
   
    

   
    




// without the use of react-intersection
// const ref = useRef(); 
// const [elementVisiable, setElementVisiable] = useState();
//     useEffect(()=>{
//         const observer = new IntersectionObserver((entries) => {
//             const entry = entries[0]
//             setElementVisiable(entry.isIntersecting)
//         })
//         observer.observe(ref.current)
//     },[])    
// console.log(elementVisiable)









    return (
        <article className="home-section">
            <section className = 'hero-wrapper'> 
                <h1 className = 'main-text'>My name is Jose Valadez</h1>    
                <p className = 'sub-text'> Welcome To My Portfolio.</p>   
            </section>

            <section className = "story-overlook" ref = {story}>
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
                    {`Works has entred view `}
                </h1>
            </section>

            <section className = "resume-overlook">
                <h1>
                    resume
                </h1>
            </section>

            <section  className = "contact" ref={contact}>
                <h1>
                    {  `Contact has entred view `}
                </h1>
            </section>

        </article>

       
    )
}

export default Home