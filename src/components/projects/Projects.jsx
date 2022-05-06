import { useState } from 'react'
import '../../Styles/projects.css'
import personalWeb from './personalWeb'
import ramshackle from './ramshackle'
import planted from './planted'
import crabby from './crabby'


export default function Projects(){

    const [project, setProject] = useState(personalWeb)
    const [line, setLine] = useState('personalWebLine')
    const [background, setBackground] = useState('pw_box')
    

    const handlePersonalWeb = () => {
        setProject(personalWeb)
        setLine('personalWebLine')
        setBackground('pw_box')
    }
    const handleRamshackle = () => {
        setProject(ramshackle)
        setLine('ramshackleLine')
    }
    const handlePlanted = () => {
        setProject(planted)
        setLine('plantedLine')
    }
    const handleCrabby = () => {
        setProject(crabby)
        setLine('crabbyLine')
    }
    

    const handlePrevious = () =>{
       project === ramshackle &&
       setProject(personalWeb)
       
    }
    const handleNext = () =>{
        project === personalWeb ?
        setProject(ramshackle) :
        setProject(personalWeb)
    }
    

    
    return(
        <div className={background}>
            <div>
                {project}
            </div>
            <div className={line}>
                
            </div>
            <div className='buttons_list'>
                <button onClick={handlePrevious}><div>here comes the div with the up arrow</div></button>
                <button onClick={handlePersonalWeb}>Personal Web</button>
                <button  onClick={handleRamshackle}>Ramshackle</button>
                <button  onClick={handlePlanted}>Planted</button>
                <button  onClick={handleCrabby}>Crabby</button>
                <button onClick={handleNext}><div>here comes the div with down arrow</div></button>
            </div>
        </div>
    )
}