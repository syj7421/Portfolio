
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
