import './App.css';
import { Route, Routes } from "react-router-dom"; 
import Home from './components/Home'
import About from './components/About';
import CV from './components/CV';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <h1>this is my mothefucker app</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
