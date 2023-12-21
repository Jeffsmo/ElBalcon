import {NavLink} from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <nav>

            <ul className='font-semibold navbar-container'>
                <li>
                    <NavLink to='/' className='nav-font'>
                        El Balcón
                    </NavLink>
                </li>
            </ul>

            <ul className='navbar-container'>
                <li>
                        Jeferson Marin
                </li>
                <li>
                    <NavLink to='/menu' className= 'font-semibold Menu nav-font'>
                        Menú
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar