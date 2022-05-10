
import '../Styles/header.css'
import Navbar from './Navbar'
import Me from '../components/Me'



export default function Header(){
    
    return(
        <div className='header-box' id='Home'>
            <div>
            <Navbar/>
            </div>
            
            <div className='title'>
                Hector Marin Fenoll                
            </div>
            <Me/>
            
        </div>
    )
}