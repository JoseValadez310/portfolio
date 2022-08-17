import '../Styles/Nav.css'

const Nav = () => {
    return(
        <nav>
            <h1 className = 'nav-logo'>
                Valadez.
            </h1>

            <ul className = 'nav-links'>
                <li className = 'link'>Works</li>
                <li className = 'link'>Resume</li>
                <li className = 'link'>Story</li>
                <li className = 'link'>Contact</li>
            </ul>
        </nav>
    )
}

export default Nav