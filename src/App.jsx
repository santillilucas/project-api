import {useState,  useEffect } from 'react';
import Characters from "./components/Characters";
import Paginacion from './components/Paginacion';
import { Link, NavLink } from 'react-router-dom'
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';


function App() {
  const [info, setInfo] = useState([])
  const [characters, setCharacters] = useState([]);
  const initialUrl = 'https://rickandmortyapi.com/api/character';

    function fetchCharacters(url) {
      
      fetch(url)
      .then(respuesta => respuesta.json())
      .then(datos => {
        setInfo(datos.info)
        setCharacters(datos.results);
        console.log(datos.info);
      })
      .catch(error => console.log(error));
    }
    useEffect(() => {
      fetchCharacters(initialUrl);   
    }, [] );

    const anterior =() =>{
      fetchCharacters(info.prev);
    };
    const siguiente =() => {
      fetchCharacters(info.next);
    };


  return (  
  <> 
    <div className='nav-botones'>
    <NavLink to={'/contact'}><button className='boton-contacto'>contact</button> </NavLink>
    <NavLink to={'aboutUs'}> <button className='boton-aboutUs'>AboutUs</button></NavLink>
    </div>

   
    
    <div className='TittleContainer'>
    
      <h1>Luky and Morty API</h1> 
    </div>
    <Paginacion 
       prev={info.prev}
       next={info.next}
       anterior={anterior}
       siguiente={siguiente}
    />
    <Characters characters={characters} />
    
   
    <footer><h4 className='footer'>Powerd by Lucas Santilli</h4> </footer>
    </>
  );
}

export default App;
