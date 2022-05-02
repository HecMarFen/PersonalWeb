import { useEffect, useState } from 'react'
import '../../Styles/CV.css'
import experience from './Experience'
import education from './Education'
import skills from './Skills'
import licenses from './Licenses'
import courses from './Courses'
import languages from './Languages'


export default function CV(){
    
    const [display, setDisplay] = useState(skills)
    

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
        <div className='cv_box'>
            <div className='display_box'>
               {display}
            </div>
            <div className='side_box'>
                <div className='image_cv' >
                    //sliding images of me
                </div>
                <div className='button_list'>
                
                    <button className='button_experience' onClick={handleExperience}>Experience</button>
                    <button className='button_education' onClick={handleEducation}>Education</button>
                    <button className='button_skills' onClick={handleSkills}>Skills</button>
                    <button className='button_languages' onClick={handleLanguages}>Languages</button>
                    <button className='button_courses' onClick={handleCourses}>Further education</button>
                    <button className='button_licenses' onClick={handleLicenses}>Licenses</button>

                </div>
            </div>
        
        </div>
    )
}