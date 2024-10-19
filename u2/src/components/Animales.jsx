import { useState } from "react";

const Animales = () => {
    const [animalsState, setAnimalsState] = useState({
        animales: [
            { nombre: 'Bobby', tipo: 'perro', edad: 12 },
            { nombre: 'Flipper', tipo: 'pajaro', edad: 5 },
            { nombre: 'Gary', tipo: 'gato', edad: 16 }
        ],
        mensaje: 'Este es el mensaje'
    })

    const [mensaje, setMensaje] = useState('Este es el mensaje');

    const changeMsg = () => {
        setMensaje("Mensaje cambiado!")
    }

    return <div>
        <h1>{animalsState.animales[0].nombre}</h1>
        <h2>{mensaje}</h2>
        <button onClick={changeMsg}>Cambiar Mensaje</button>
    </div>
}

export default Animales;