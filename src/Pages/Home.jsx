import Header from "../components/Header";
import Footer from "../components/Footer";
import About from '../components/About';
import CV from '../components/CV';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navbar from "../components/Navbar";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <header>
                <Header/>
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