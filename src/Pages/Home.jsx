import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from '../components/About';
import CV from '../components/CV';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home(){
    return(
        <div>
            <header>
                <Navbar/>
            </header>
            
                <About/>
            
                <CV/>
            
                <Projects/>
            
                <Contact/>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}