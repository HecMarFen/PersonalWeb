import { useState } from 'react'
import '../../Styles/projects.css'
import personalWeb from './personalWeb'
import ramshackle from './ramshackle'
import planted from './planted'
import crabby from './crabby'


export default function Projects(){

    const [project, setProject] = useState(personalWeb)

    const handlePersonalWeb = () => {
        setProject(personalWeb)
    }
    const handleRamshackle = () => {
        setProject(ramshackle)
    }
    const handlePlanted = () => {
        setProject(planted)
    }
    const handleCrabby = () => {
        setProject(crabby)
    }

    const handleline = () =>{
        if(project === personalWeb){
            className = 'personalWebLine'
        }else if(project === ramshackle){
            className = 'ramshackleLine'
        }else if(project=== planted){
            className = 'plantedLine'
        }else if(project === crabby){
            className = 'crabbyLine'
        }
    }

    
    return(
        <div className='projects_box'>
            <div>
                {project}
            </div>
            <div className={handleline}>  
            </div>
            <div>
                <button onClick={handlePersonalWeb}>Personal Web</button>
                <button  onClick={handleRamshackle}>Ramshackle</button>
                <button  onClick={handlePlanted}>Planted</button>
                <button  onClick={handleCrabby}>Crabby</button>
            </div>
        </div>
    )
}