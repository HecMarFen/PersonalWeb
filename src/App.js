import './App.css';
import { Route, Routes } from "react-router-dom"; 
import Home from './Pages/Home'
import About from './components/About';
import CV from './components/CV/CV';
import Projects from './components/projects/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
