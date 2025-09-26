import './Estudiante.css';

function Estudiante({nombre, apellido}) {
    return(
        <div>
            <hi className='nombre' > {nombre} {apellido} </hi>
        </div>
    )
    
}

export default Estudiante;