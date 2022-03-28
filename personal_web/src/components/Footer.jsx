import React from "react";
import { Link } from "react-router-dom";
import '../public/Styles/footer.css'


export default function Footer() {
	return (
		<div className="footer">
            <div className="footer-links">
                <div>
                    <Link to='/About'>ABOUT</Link>
                </div>
                <div>
                <Link to='/CV'>CV</Link>
                </div>
                
                <Link to='/Projects'>PROJECTS</Link>
                <Link to='/Contact'>CONTACT</Link>
            </div>
            <div>
                <Link to='https://www.linkedin.com/in/h%C3%A9ctor-mar%C3%ADn-fenoll-313b2119a/'><i className="fa-brands fa-linkedin"></i></Link>
                <Link to='https://github.com/HecMarFen'><i className="fa-brands fa-github"></i></Link>
                <Link to=''><i className="fa-brands fa-instagram"></i></Link>
                <Link to=''><i className="fa-brands fa-facebook"></i></Link>  
            </div>
			<div>
				© 2022 Hector Marin Fenoll. All rights reserved
			</div>
		</div>
	);
};

