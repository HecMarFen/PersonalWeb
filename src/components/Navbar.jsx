import '../Styles/navbar.css'
import React, {useState} from 'react'
import { HashLink as Link} from 'react-router-hash-link'



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
        if(window.scrollY > 15){
            setNav('nav_back new_toggler')
        }else{
            setNav('nav')
        }
    }
    window.addEventListener('scroll', changeNavs)
    
    return(
        <nav className={nav}>
            <div>
                <a href='#'><img className='personalLogo' src='image/logo.JPG' alt='Personal logo'/></a>
            </div>
            <div>
            <ul className={active}>
                <li className="nav_item">
                    <Link className="nav_link" to='#Home' smooth >Home</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to='#About' smooth >About</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to='#CV' smooth >CV</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to='#Projects' smooth >Porfolio</Link>
                </li>
                <li className="nav_item">
                    <Link className="nav_link" to='#Contact' smooth >Contact</Link>
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