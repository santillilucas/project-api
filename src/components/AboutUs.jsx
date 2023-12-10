import React from 'react'
import './characters.css'
import App from '../App.jsx'
import Contact from './Contact.jsx'
import {NavLink} from "react-router-dom"





function AboutUs() {
  return (
    <>
     <div>
     <NavLink to={'/'}><button className='boton-contacto'>home</button> </NavLink>
     <NavLink to={'/contact'}><button className='boton-contacto'>Contact</button> </NavLink>
     </div>
    
   
    
    
     <h1 className='contacto'>Sobre Nosotros</h1>
     <div className='containerInfo'>
        <h4>¿Qué es esto?</h4> 
        <p>La API de Rick and Morty es una API REST (ish) y GraphQL basada en el programa de televisión Rick and Morty . Tendrás acceso a cientos de personajes, imágenes, ubicaciones y episodios. La API de Rick and Morty está llena de información canónica como se ve en el programa de televisión.</p>
        <hr />

        <h4>¿Quién eres?</h4>
        <p>Soy Lucas Maximiliano Santilli, estoy estudiando una diplomatura Fullstack en la universidad tecnologica nacional 'UTN'.</p>
        <hr />

        <h4>¿Por qué construiste esto?</h4>
        <p>Porque para finalizar la primer etapa de la diplomatura, nos pidieron que realizemos un projecto basado en una API a eleccion y esta fue una de las opciones que habia para elejir.</p>
     </div>
    </>
  )
}

export default AboutUs