import React from 'react'
import Pages from '../Pages/Pages'

import './Main.css'

const Main = () => {
    return (
        <div className="containerMain">
            <Pages id="home" title="Hola" body="Wacho"/>
            <Pages id="about" title="Hola" body="Lorem En este video crearemos una página de aterrizaje simple con un desplazamiento suave. Le mostraré 3 opciones que incluyen CSS puro (comportamiento de desplazamiento), jQuery y un script JS ligero" />
            <Pages id="projects" title="Hola" body="Como En este video crearemos una página de aterrizaje simple con un desplazamiento suave. Le mostraré 3 opciones que incluyen CSS puro (comportamiento de desplazamiento), jQuery y un script JS ligero" />
            <Pages id="contact" title="Hola" body="Como estas En este video crearemos una página de aterrizaje simple con un desplazamiento suave. Le mostraré 3 opciones que incluyen CSS puro (comportamiento de desplazamiento), jQuery y un script JS ligero" />
        </div>
    )
}

export default Main
