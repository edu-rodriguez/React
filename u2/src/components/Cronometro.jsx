import React from 'react';

class Cronometro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: this.props.inicio
        };

        let interval = setInterval(() => {
            this.setState((state, props) => {
                return {contador: state.contador - 1}
            });
            if(this.state.contador === 0) {
                clearInterval(interval);
            }
        }, 1000);
    } 
    render() {
        return (
            <h2>{this.state.contador}</h2>
        )
    }
}

export default Cronometro;