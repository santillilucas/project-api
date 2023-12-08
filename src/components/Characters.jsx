import './characters.css'

function Characters({ characters}) {
    return(
        <div className='container-personajes'>
          {characters.map((character, indice) => ( 
            <div key={indice} className='container-card'>
                <div>
                    <img src={character.image} alt="personaje" />
                    <div>
                        <h5>{character.name}</h5>
                        <hr />
                        <p>Status: {character.status}</p>
                        <p>Especie: {character.species}</p>
                        <p>Ubication: {character.location.name}</p>  
                        <p>Gender: {character.gender}</p>                     
                    </div>
                </div>
            </div>
          ) ) }
        </div>
    );   
}
export default Characters;