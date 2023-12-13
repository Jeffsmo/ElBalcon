import {NavLink} from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <nav>

            <ul>
                <li>
                    <NavLink to='/'>
                        El Balcón
                    </NavLink>
                </li>
            </ul>

            <ul>
                <li>
                        Jeferson Marin
                </li>
            </ul>


        </nav>
    )
}

export default Navbar