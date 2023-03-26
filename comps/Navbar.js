import Link from 'next/link'
import styles from '../src/styles/Navbar.module.css'
import Image from 'next/image';


const Navbar = () => {
    return (  
        <nav className = {styles.navbar}> 
            <Image src = '/logo.svg' width = {77} height = {77}/>
            <Link href="/"> Home </Link>
            <Link href="/About"> About</Link>
            <Link href="/folderPage/Name"> Name</Link>
        </nav>
    );
}

export default Navbar;


// import Image from 'next/image' is meant to help with loading speeds. The image will
//only be loaded as it appears on the screen 