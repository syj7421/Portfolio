
import './App.css';
import About from './components/About';
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
    </div>
  );
}

export default App;
