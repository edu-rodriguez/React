const BotonSimple = () => {
    const handleClick = (event) => {
        console.log("Boton pulsado!")
    }

    return (
        <div>
            <button onClick={handleClick}>Pulsa el boton</button>
        </div>
    )
}

export default BotonSimple;