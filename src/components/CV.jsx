import { useEffect, useState } from 'react'
import '../Styles/CV.css'


export default function CV(){
    
    const experience =
    <>
    <h2>Work Experience</h2>
    <hr/>
    <div>
    <table>
        <tr>
            <td>AUG 2020 - NOV 2021</td>
            <td>
                <tr>
                    <td>Cafe DIX</td>
                </tr>
                <tr>
                    <td>Berlinische Galerie, Berlin, Germany</td>
                </tr>
                <tr>
                    <td>Full time Job as bartender, waiter and event manager asistant</td>
                </tr>
            </td>
            
        </tr>
        <tr>
            <td>JAN 2020 - MAR 2020</td>
            <td>
                <tr>
                    <td>CRC Bank - Caja Rural</td>
                </tr>
                <tr>
                    <td>Office of San Vicente del Raspeig, Alicante, Spain</td>
                </tr>
                <tr>
                    <td>Full-time internship as administration assistant and cashier.
	                    - Tasks included: managing money flows, overseeing customer accounts, crosseling insourances, marketing actions to atract new clients in the local area.
                    </td>
                </tr>
            </td>            
        </tr>
        <tr>
            <td>SEP 2019 - NOV 2019</td>
            <td>
                <tr>
                    <td>Pocardy Restaurante</td>
                </tr>
                <tr>
                    <td>Hotel Almirante, Alicante, Spain</td>
                </tr>
                <tr>
                    <td>Full-time job as pool bar manager
                        - Tasks included: day-end closing of cash registry, inventory-taking, capacity planning.
                    </td>
                </tr>
            </td>     
        </tr>
        <tr>
            <td>JUN 2019 - AGO 2019</td>
            <td>
                <tr>
                    <td>Hotel Almirante</td>
                </tr>
                <tr>
                    <td>Hotel Almirante, Alicante, Spain</td>
                </tr>
                <tr>
                    <td>Full-time internship rotating all eight departments (Hotel-, Restaurant- and Event Management, Marketing and Sales, Human Resources, the Front Desk, etc.)
                        - Tasks included: creating staff shift schedules, manually managing room occupancies, performing check-in and -out, welcoming guests
                    </td>
                </tr>
            </td>  
        </tr>
        <tr>
            <td>JUN 2018- SEP 2018</td>
            <td>
                <tr>
                    <td>Agencia V</td>
                </tr>
                <tr>
                    <td>Alicante, Spain</td>
                </tr>
                <tr>
                    <td> Workstudent as property agent
                        - Task included: 
                    </td>
                </tr>
            </td>  
        </tr>
    </table>

    </div>
    
    </>
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
            <div className='side_box'>
                <div className='image_cv' >
                    //sliding images of me
                </div>
                <div className='button_list'>
                
                    <button className='button_experience' onClick={handleExperience}>Experience</button>
                    <button className='button_education' onClick={handleEducation}>Education</button>
                    <button className='button_skills' onClick={handleSkills}>Skills</button>
                    <button className='button_languages' onClick={handleLanguages}>Languages</button>
                    <button className='button_courses' onClick={handleCourses}>Courses</button>
                    <button className='button_licenses' onClick={handleLicenses}>Licenses</button>

                </div>
            </div>
        
        </div>
    )
}