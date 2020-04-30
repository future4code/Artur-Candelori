import React from 'react';
import axios from 'axios';

export class Lista extends React.Component {
    state = {
      listaUsuarios: [], 
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
            headers: {
                Authorization: "artur-candelori-julian"
            }
        }).then((response) => {
            this.setState({listaUsuarios: response.data})
        }).catch((error) => {
            console.log(error)
        })
    }

    onClickDeleteUser = (userId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`, {
            headers: {
                Authorization: "artur-candelori-julian"
            }
        }).then((response) => {
            window.alert('Usuário deletado')
            this.getAllUsers()
        }).catch((error) => {
            window.alert('Erro!')
        })
    }

    

    /* onClickRemoveUsuario() {
    } */
    render(){
        return (
            <div>
                <h2>Usuários Cadastrados:</h2>
                {this.state.listaUsuarios.map((user) => {
                   return <p>{user.name} <button onClick={() => this.onClickDeleteUser(user.id)}>X</button></p>
                })}    
            </div>
        );
    }
}    
