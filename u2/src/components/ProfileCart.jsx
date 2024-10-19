import React from 'react';

class ProfileCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: 'Titulo de la card',
            texto: 'Texto de la card'
        };
    } render() {
        return (
            <div className='profile-card'>
                <h1>{this.state.titulo}</h1>
                <p>{this.state.texto}</p>
            </div>
        )
    }
}

export default ProfileCart;