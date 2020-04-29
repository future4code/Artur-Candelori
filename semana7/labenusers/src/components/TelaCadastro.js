import React from 'react';
import axios from 'axios';

export class Cadastro extends React.Component {
    state = {
        newUserNameValue: '',
        newUserEmailValue: ''
    }

    createUser = (userName, userEmail) => {
        const body = {
          name: userName,
          email: userEmail
        };
    
        axios
          .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
              headers: {
                Authorization: "artur-candelori-julian"
              }
            }
          )
          .then(resposta => {
            console.log("ok", resposta);
            //this.getAllUsers();
          })
          .catch(error => {
            console.log("erro", error.response);
          });
    };

    onChangeName(event) {
        this.setState({newUserNameValue: event.target.value})
    }
    
    onChangeEmail(event) {
        this.setState({newUserEmailValue: event.target.value})
    }

    onClickSaveUser() {
        this.createUser(this.state.newUserNameValue, this.state.newUserEmailValue)
    }

    render(){
        return (
            <div>
                <label>Nome: </label>
                <input onChange={this.onChangeName} value={this.state.userNameValue}/>
                <br/><br/>
                <label>Email: </label>
                <input onChange={this.onChangeEmail} value={this.state.userEmailValue}/>
                <br/><br/>
                <button onClick={this.onClickSaveUser}>Salvar</button>
            </div>
        );
    }
}