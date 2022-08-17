import '../Styles/Nav.css'

import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <h1 className = 'nav-logo'> <NavLink to = '/'> Valadez. </NavLink></h1>

            <ul className = 'nav-links'>
                <li className = 'link'> <NavLink to = '/Works'>   Works   </NavLink> </li>
                <li className = 'link'> <NavLink to = '/Resume'>  Resume  </NavLink></li>
                <li className = 'link'> <NavLink to = '/Story'>   Story   </NavLink></li>
                <li className = 'link'> <NavLink to = '/Contact'> Contact </NavLink></li>
            </ul> 
        </nav>
    )
}

export default Nav