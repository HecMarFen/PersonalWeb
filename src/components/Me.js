import { useState } from 'react'
import '../Styles/header.css'

export default function Me(){
    const [position, setPosition] = useState('circle')

    const profilePic = () => {
        if (window.scrollY > 250){
            setPosition('circle2')
        }else{
            setPosition('circle')
        }
    }
   

    window.addEventListener('scroll', profilePic )

    return(
        <div className={position}>
        </div>
    )
}