import '../Styles/navbar.css'
import React, {useState} from 'react'


export default function Navbar(){
    const [active, setActive] = useState('nav_menu')
    const [toggleIcon, setToggleIcon] = useState('nav_toggler')
    const [nav, setNav] = useState('nav')
    const navToggle = () => {
        active === 'nav_menu' ?
        setActive('nav_menu nav_active')
        : setActive('nav_menu');

        toggleIcon === 'nav_toggler' ?
        setToggleIcon('nav_toggler toggle')
        : setToggleIcon('nav_toggler')
    }

    const changeNavs = ()=>{
        if(window.scrollY > 30){
            setNav('nav_back new_toggler')
        }else{
            setNav('nav')
        }
    }
    window.addEventListener('scroll', changeNavs)
    
    return(
        <nav className={nav}>
            <div>
                <a href='#'><img href='' alt='Personal logo'/></a>
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