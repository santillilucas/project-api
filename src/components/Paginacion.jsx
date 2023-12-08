import './characters.css'

function Paginacion({prev, next, anterior, siguiente}) {
    const handlerAnterior = () => {
        anterior();
    }

    const handlerSiguiente = () => {
        siguiente();
    }


return(
    <div>
        <nav>
            <ul>
                {prev ?( 
                <li>
                    <button onClick={handlerAnterior}>Pagina Anterior</button>
                </li>
                ) : null}
                {next?(
                <li>
                    <button onClick={handlerSiguiente}>Pagina Siguiente</button>
                </li>
                ): null}
            </ul>

        </nav>
    </div>
);
}
export default Paginacion;