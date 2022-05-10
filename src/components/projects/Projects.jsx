import { useState } from 'react'
import '../../Styles/projects.css'
import personalWeb from './personalWeb'
import ramshackle from './ramshackle'
import planted from './planted'
import crabby from './crabby'


export default function Projects(){

    const [project, setProject] = useState(personalWeb)
    const [triangle, setTriangle] = useState('triangle-PW')
    const [background, setBackground] = useState('pw_box')
    

    const handlePersonalWeb = () => {
        setProject(personalWeb)
        setTriangle('triangle-PW')
        setBackground('pw_box')
    }
    const handleRamshackle = () => {
        setProject(ramshackle)
        setTriangle('triangle-RS')
        setBackground('rs_box')
    }
    const handlePlanted = () => {
        setProject(planted)
        setTriangle('triangle-PL')
        setBackground('pl_box')
    }
    const handleCrabby = () => {
        setProject(crabby)
        setTriangle('triangle-CR')
        setBackground('cr_box')
    }
    
    // const data = [personalWeb, ramshackle, planted, crabby]
    // const handlePrevious = () =>{   
    // }
    // const handleNext = () =>{
    //     for(let i=0; i<data.length; i++){
    //         setProject(data[i+1])
    //     }
    // }
    
    return(
        <div className={background} id='Projects'>
            <div>
                {project}
            </div>
            <div className='divLine'>
                <div className={triangle}></div>    
            </div>
            <div className='buttons_list'>
                {/* <button onClick={handlePrevious}>previous</button> */}
                <button className='button_project' onClick={handlePersonalWeb}>Personal Web</button>
                <button className='button_project' onClick={handleRamshackle}>Ram Shackle</button>
                <button className='button_project' onClick={handlePlanted}>Planted</button>
                <button className='button_project' onClick={handleCrabby}>Crabby</button>
                {/* <button onClick={handleNext}>next</button> */}
            </div>
        </div>
    )
}