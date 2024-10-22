import { useState } from "react";

const Suma = ({numA, numB, sumaResuelta}) => {
    const [resultado, setResultado] = useState(0);
    const handleClick = () => {
        setResultado(numA + numB);
        sumaResuelta(resultado);
    }

    return (
        <div>
            <button onClick={handleClick}>Boton de suma</button>
            <p>El resultado de {numA} + {numB} es {resultado}</p>
        </div>
    );
}

export default Suma;