import { useEffect, useState } from 'react'
import '../../Styles/CV.css'
import experience from './Experience'
import education from './Education'
import skills from './Skills'
import licenses from './Licenses'
import courses from './Courses'
import languages from './Languages'
import { bubble as Menu } from 'react-burger-menu'


export default function CV(){
    
    const [display, setDisplay] = useState(education)
    const [active, setActive] = useState('burg_menu')

    const sideBar = () =>{
        active === 'burg_menu'?
        setActive('')
        : setActive('burg_menu');

        

    }
   

    const handleExperience = () => {
        setDisplay(experience)
    }
    const handleEducation = () => {
        setDisplay(education)
    }
    const handleSkills = () => {
        setDisplay(skills)
    }
    const handleLanguages = () => {
        setDisplay(languages)
    }
    const handleCourses = () => {
        setDisplay(courses)
    }
    const handleLicenses = () => {
        setDisplay(licenses)
    }

    return(
        <div className='cv_box' id='CV'>
            <Menu width={ '20%' } onClick={sideBar} itemListElement="div">
                <a onClick={handleExperience} className='menu-item'>Experience</a>
                <a onClick={handleEducation} className='menu-item'>Education</a>
                <a onClick={handleSkills} className='menu-item'>Skills</a>
                <a onClick={handleLanguages} className='menu-item'>Languages</a>
                <a onClick={handleCourses} className='menu-item'>Further Education</a>
                <a onClick={handleLicenses} className='menu-item'>Licenses</a>
            </Menu>
            
            
            <div className='display_box'>
               {display}
            </div>
            <div className='side_box'>
                <div className='image_cv' >
                    //sliding images of me
                </div>
                <div className='button_list'>
                
                   

                </div>
            </div>
        
        </div>
    )
}