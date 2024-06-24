import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx"
function Navigation() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const [menu, setMenu] = useState(true)

    useEffect(() => {
        const currentPage = location.pathname;
        setActiveLink(currentPage);
    }, [location]);

    return (
        <div className='navbar-section' >
            <Link className={`navbar ${activeLink === '/' ? 'active' : ''}`} to="/">
                Home
            </Link>
            <Link className={`navbar ${activeLink === '/About-us' ? 'active' : ''}`} to="/About-us">
                About us
            </Link>
            <Link className={`navbar ${activeLink === '/Tourist-Place' ? 'active' : ''}`} to="/Tourist-Place">
                Tourist Places
            </Link>
            <Link className={`navbar ${activeLink === '/Types-of-cars' ? 'active' : ''}`} to="/Types-of-cars">
                Car Rental
            </Link>
            <Link className={`navbar ${activeLink === '/Contact' ? 'active' : ''}`} to="/Contact">
                Contact
            </Link>


            {menu ? <></> :

                <div className='hidden-navbar'>
                    <RxCross1 onClick={() => setMenu(true)} className='menu-icon' />
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/">
                        Home
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/About-us">
                        About Us
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Tourist-Place">
                        Tourist Places
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Types-of-cars">
                        Car Rental
                    </Link>
                    <Link className="menu-nav" onClick={() => setMenu(true)} to="/Contact">
                        Contact
                    </Link>
                </div>

            }
            <div className='menu'>
                {menu ? <AiOutlineMenu onClick={() => setMenu(false)} className='menu-icon' /> : <></>}



            </div>


        </div>
    );
}

export default Navigation;
