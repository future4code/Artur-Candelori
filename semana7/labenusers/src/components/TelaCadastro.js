import React from 'react';

export class Cadastro extends React.Component {
    state = {
        
    }

    render(){
        return (
            <div>
                <label>Nome: </label>
                <input />
                <br/><br/>
                <label>Email: </label>
                <input />
                <br/><br/>
                <button>Salvar</button>
            </div>
        );
    }
}