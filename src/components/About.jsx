import { useState } from 'react'
import '../Styles/About.css'
import aboutData from './aboutData';

export default function About(){

    const [showMore, setShowMore] = useState(false)
    const {text} = aboutData;

    return(
        <>
        <h2>About me</h2>
            <hr/>
        
        <div className="box">
            <div className='content'>
                <p>
                    Hello world. I am Hector Marin Fenoll I am a Spanish soul based in Berlin.
                    I am an aspiring Web Developer who recently decided to change carreer and swim into
                    the tech industry. I hold a Bachellor in Business science, and a second Bachellor on
                    Tourism, both expired by University of Alicante.
                </p>
            </div>
            {showMore ? '' : text}
            <button onClick={() => setShowMore(!showMore)}>{showMore? 'Show less' : 'Show more'}</button>
                
            
            <img href='' alt='image of me'/>
            
            //sliding images of fun times 

        </div>
        </>
    )
}