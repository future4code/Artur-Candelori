import React from 'react';
import axios from 'axios';

export class Lista extends React.Component {
    state = {
      listaUsuarios: [], 
    }

    getAllUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "artur-candelori-julian"
              }
            }
        )
        .then(resposta => {
            this.setState({listaUsuarios: resposta.data})
        })
        .catch(error => {
            console.log(error.response);
        });
    };

    /* deleteUser = (id) => {
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id',
        {
            headers: {
                Authorization: "artur-candelori-julian"
            }
            path : id
        }).then(resposta => {

        })
    } */

    

    /* onClickRemoveUsuario() {
    } */
    render(){
        this.getAllUsers()
        return (
            <div>
                <h2>Usuários Cadastrados:</h2>
                {this.state.listaUsuarios.map((user) => {
                   return <p>{user.name} <button>X</button></p>
                })}    
            </div>
        );
    }
}    
