import React from 'react';

class Despedida extends React.Component {
    render() {
        return <h2>Adios, {this.props.nombre}</h2>
    }
}

export default Despedida;