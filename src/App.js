import './App.css';

import Pages from './Components/Pages/Pages'
import NavBar from './Components/Elements/NavBar/NavBar';

import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Skills from './Components/Pages/Skills/Skills';
import Projects from './Components/Pages/Projects/Projects';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="homePage" id="home">
        <Pages id="home" body={<Home/>} />
      </div>
      <div className="aboutPage" id="about">
        <Pages id="about"  body={<About/>} />
      </div>
      <div className="skillsPage" id="skills">
        <Pages id="skills"  body={<Skills/>} />
      </div>
      <div id="projects">
        <Pages id="projects"  body={<Projects/>}/>
      </div>
      <div id="contact">
        <Pages id="contact"  body={<Contact/>} />
      </div>
                                              
    </div>
  );
}

export default App;
