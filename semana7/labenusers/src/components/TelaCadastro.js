import React from 'react';
import axios from 'axios';

export class Cadastro extends React.Component {
    state = {
      newUserNameValue: '',
      newUserEmailValue: ''
    }

    onChangeName = (event) => {
      this.setState({newUserNameValue: event.target.value})
    }
    
    onChangeEmail = (event) => {
      this.setState({newUserEmailValue: event.target.value})
    }

    onClickCreateUser = () => {
      const body = {
        name: this.state.newUserNameValue,
        email: this.state.newUserEmailValue
      }

      axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
        headers: {
          Authorization: "artur-candelori-julian"
        }
      }).then((response) => {
        window.alert('Usuário criado')
      }).catch((error) => {
        window.alert('Erro!')
      })

      this.setState({newUserNameValue: '', newUserEmailValue: ''})
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
                <button onClick={this.onClickCreateUser}>Salvar</button>
            </div>
        );
    }
}