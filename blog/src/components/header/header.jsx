import { NavLink } from "react-router-dom";

function Header() {
    return ( 
        <div class="container">
        <header>
                    <ul class="menu">
                        <li>
                            <NavLink to={'/blogs'}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/works'}>Works</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/'}>Contacts</NavLink>
                        </li>
                    </ul>
                    <button class="burger" onclick="toggleMenu()">
                        <span class="line line-1"></span>
                        <span class="line line-2"></span>
                        <span class="line line-3"></span>
                    </button>
                </header>
                
            </div>
     );
}

export default Header;