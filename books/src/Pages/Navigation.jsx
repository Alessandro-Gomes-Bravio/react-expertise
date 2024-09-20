import { Link, Outlet } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className='navbar'>
                <ul className="nav-links">
                    <li>
                        <Link to='/home' className='nav-item'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='nav-item'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/about' className='nav-item'>About Us</Link>
                    </li>

                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Navigation;
