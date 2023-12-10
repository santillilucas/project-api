import React from 'react'
import './characters.css'
import {NavLink} from "react-router-dom"


function Contact() {
  return ( 
  <>
  <div>
     <NavLink to={'/'}><button className='boton-contacto'>Home</button> </NavLink>
     <NavLink to={'/aboutUs'}><button className='boton-contacto'>AboutUs</button> </NavLink>
     </div>
    
    <h1 className='contacto'>Contact</h1>
    <div className='containerForm'>
        <form>
            <label>Nombre y Apellido: </label>
            <input type="text"  />

            <label>Correo Electronico: </label>
            <input type="text" />

            <label>Pregunta:</label>
            <input type="text" />

            <label>Mensaje:</label>
            <textarea name='textarea' rows='10' cols='21'></textarea>
             
            <button type="reset">Reset</button>
            <button type="Enviar">Enviar</button>
            

            
        </form>
    </div>
    </>
  )
}

export default Contact