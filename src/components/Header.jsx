
import '../Styles/header.css'
import Navbar from './Navbar'




export default function Header(){
    
    return(
        <div className='header-box'>
            <div>
            <Navbar/>
            </div>
            
            <div className='title'>
                Hector Marin Fenoll                
            </div>
        </div>
    )
}