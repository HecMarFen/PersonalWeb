import { useEffect, useState } from 'react'
import '../Styles/CV.css'


export default function CV(){
    
    const experience = <>this is the experience</>
    const education = <>this is the education</>
    const languages = <>this is languages</>
    const skills = <>this is skills</>
    const courses = <>this is courses</>
    const licenses = <> licenses i got when i was a kid</>
    const [display, setDisplay] = useState(experience)
    

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
            <div className='side'>
                <div >
                    //sliding images of me
                </div>
                <div className='button_list'>
                
                    <button onClick={handleExperience}>Experience</button>
                    <button onClick={handleEducation}>Education</button>
                    <button onClick={handleSkills}>Skills</button>
                    <button onClick={handleLanguages}>Languages</button>
                    <button onClick={handleCourses}>Courses</button>
                    <button onClick={handleLicenses}>Licenses</button>

                </div>
            </div>
        
        </div>
    )
}