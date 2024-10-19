import { useState } from "react";

const Suma = ({numA, numB}) => {
    const [resultado, setResultado] = useState(0);
    const handleClick = () => {
        setResultado(numA + numB);
    }

    return (
        <div>
            <button onClick={handleClick}>Boton de suma</button>
            <p>El resultado de {numA} + {numB} es {resultado}</p>
        </div>
    );
}

export default Suma;