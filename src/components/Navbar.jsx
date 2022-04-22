import '../Styles/navbar.css'
import React, {useState} from 'react'
import logo from '../assets/logo'

export default function Navbar(){
    const [active, setActive] = useState('nav_menu')
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const navToggle = () => {
        active === 'nav_menu' ?
        setActive('nav_menu nav_active')
        : setActive('nav_menu');

        toggleIcon === 'nav_toggler' ?
        setToggleIcon('nav_toggler toggle')
        : setToggleIcon('nav_toggler')
    }
    const lgo = logo
    return(
        <nav>

            <div>
                <a href='#'><img href='lgo' alt='Personal logo'/></a>
            </div>
            <div>
            <ul className={active}>
                <li className="nav_item">
                    <a href="" className="nav_link">Home</a>
                </li>
                <li className="nav_item">
                    <a href="" className="nav_link">About</a>
                </li>
                <li className="nav_item">
                    <a href="" className="nav_link">Portfolio</a>
                </li>
                <li className="nav_item">
                    <a href="" className="nav_link">CV</a>
                </li>
                <li className="nav_item">
                    <a href="" className="nav_link">Contact</a>
                </li>
            </ul>
            </div>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}