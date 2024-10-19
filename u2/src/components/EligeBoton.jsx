import { useState } from "react";

const EligeBoton = () => {
    const [mensaje, setMensaje] = useState("");
    const handleClick = (num) => {
        setMensaje(`Has elegido el boton ${num}`)
    }

    return (
        <div>
            <h2>Elige un Boton</h2>
            <p>{mensaje}</p>
            <button onClick={(event) => {handleClick(1)}}>Boton 1</button>
            <button onClick={(event) => {handleClick(2)}}>Boton 2</button>
            <button onClick={(event) => {handleClick(3)}}>Boton 3</button>
        </div>
    )
}

export default EligeBoton;