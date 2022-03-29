import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <div>
                <Link to='/'><img href='' alt='Personal logo'/></Link>
            </div>
            <div>
                <Link to='/About'>About</Link>        
                <Link to='/CV'>CV</Link>
                <Link to='/Projects'>Projects</Link>
                <Link to='/Contact'>Contact</Link>               
            </div>
        </nav>
    )
}