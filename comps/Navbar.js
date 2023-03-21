import Link from 'next/link'

const Navbar = () => {
    return (  
        <nav className="Navbar"> 
            <h1 className="logo">Drinking Cheers</h1>
            <Link href="/"> <a>Home</a> </Link>
            <Link href="/About"> <a>About</a></Link>
            <Link href="/folderPage/Name"> <a>Name</a></Link>
        </nav>
    );
}

export default Navbar;