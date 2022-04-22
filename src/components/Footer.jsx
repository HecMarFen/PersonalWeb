import React from "react";
import { Link } from "react-router-dom";
import '../Styles/footer.css'


export default function Footer() {
	return (
		<div className="footer">
            <div className="footer-links">
                <Link to='/About'>ABOUT</Link>        
                <Link to='/CV'>CV</Link>
                <Link to='/Projects'>PROJECTS</Link>
                <Link to='/Contact'>CONTACT</Link>
               
            </div>
            <div className="footer-links-2">
                <a className="footer-icon" href='https://www.linkedin.com/in/h%C3%A9ctor-mar%C3%ADn-fenoll-313b2119a/'><i className="fa-brands fa-linkedin"></i></a>
                <a className='footer-icon' href='https://github.com/HecMarFen'><i className="fa-brands fa-github"></i></a>
                <a className='footer-icon' href=''><i className="fa-brands fa-instagram"></i></a>
                <a className='footer-icon' to=''><i className="fa-brands fa-facebook"></i></a>  
            </div>
			<div>
				© 2022 Hector Marin Fenoll. All rights reserved
			</div>
		</div>
	)
}

