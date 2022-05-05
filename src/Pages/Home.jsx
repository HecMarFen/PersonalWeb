import Header from "../components/Header";
import Footer from "../components/Footer";
import About from '../components/About';
import CV from '../components/CV/CV';
import Projects from '../components/projects/Projects';
import Contact from '../components/Contact';
import Quotes from "../components/Quotes";


export default function Home(){
    return(
        <div>
            <header>
                <Header/>
                
            </header>
            
                <About/>

                <Quotes/>
            
                <CV/>
            
                <Projects/>
            
                <Contact/>
            
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}