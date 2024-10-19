import { Component } from "react";

class BotonSimpleClase extends Component {
    handleClick = (event) => {
        console.log("Boton Pulsado!")
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Pulsa el boton</button>
            </div>
        )
    }
}

export default BotonSimpleClase;
