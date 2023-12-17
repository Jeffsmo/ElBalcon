import {NavLink} from 'react-router-dom';
import './Navbar.css'


function Navbar(){
    return(
        <nav>

            <ul className='font-semibold'>
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
                <li>
                    <NavLink to='/menu' className= 'font-semibold Menu'>
                        Menú
                    </NavLink>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar