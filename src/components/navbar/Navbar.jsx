import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const [active, setActive] = useState("nav-list");
    const [toggle, setToggle] = useState("menu");
    const openMenu = () => {
        setActive('nav-list');
        active === 'nav-list' ? setActive('nav-list menu-active') : setActive('nav-list')
        toggle === "menu" ? setToggle('menu openmenu') : setToggle('menu');
    }
    return (
        <>
            <div className='header'>
                <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
                    <div id="logo-img">
                        <a href="/#"><img src="images/logo.png" alt="NTBS" /></a>
                    </div>
                    <div className={active}>
                        <ul>
                            <li>
                                <a href="/#about" className="nav-link">About</a>
                            </li>
                            <li>
                                <a href="/#saraswati_puja" className="nav-link">Saraswati Puja</a>
                            </li>
                            <li>
                                <a href="/#committee_members" className="nav-link">Committee Members</a>
                            </li>
                            {/* <li>
                                <a href="/#events" className="nav-link">Past Events</a>
                            </li> */}
                            <li>
                                <a href="/gallery" className="nav-link">Gallery</a>
                            </li>
                            <li>
                                <a href="/#contact_us" className="nav-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    <div onClick={openMenu} className={toggle} id="menu-btn">
                        <div>
                            <span className="line-1"></span>
                            <span className="line-2"></span>
                            <span className="line-3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar
