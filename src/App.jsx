import {useState,  useEffect } from 'react';
import Characters from "./components/Characters";
import Paginacion from './components/Paginacion';


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
    
    <Paginacion 
       prev={info.prev}
       next={info.next}
       anterior={anterior}
       siguiente={siguiente}
    />
    <Characters characters={characters} />
    </>
  );
}

export default App;
