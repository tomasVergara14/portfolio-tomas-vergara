import './App.css';

import Pages from './Components/Pages/Pages'
import NavBar from './Components/Elements/NavBar/NavBar';

import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Projects from './Components/Pages/Projects/Projects';

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
      <div id="projects">
        <Pages id="projects"  body={<Projects/>}/>
      </div>
      <div id="contact">
        <Pages id="contact"  body="Como estas En este video crearemos una página de aterrizaje simple con un desplazamiento suave. Le mostraré 3 opciones que incluyen CSS puro (comportamiento de desplazamiento), jQuery y un script JS ligero" />
      </div>
                                              
    </div>
  );
}

export default App;
