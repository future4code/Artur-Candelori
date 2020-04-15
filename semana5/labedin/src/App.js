import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-UVBDH73SL-2116f01dab4d-512" 
          nome="Artur" 
          descricao="Tenho 29 anos e sou de Curitiba, Paraná. 
          Antes de iniciar na Labenu era professor de música. 
          Resolvi ir pra área de programação porque sempre gostei de computadores e tecnologia.
          No meu tempo livro gosto de games e fazer música."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://www.traum.com.br/wp-content/uploads/2018/06/email-icon-121-400x400.png"
          nome="Email:&nbsp;"
          descricao="email@address.com"
        />  
        
        <CardPequeno
          imagem="https://image.flaticon.com/icons/svg/1239/1239525.svg"
          nome="Endereço:&nbsp;"
          descricao="Rua X, 1234"
        />  
      </div>

      <div className="page-section-container">
        <h2>Formação</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Curso online de desenvolvimento web full-stack (recomendo!)." 
        />
        
        <CardGrande 
          imagem="http://www.utfpr.edu.br/icones/cabecalho/logo-utfpr/@@images/image.png" 
          nome="UTFPR" 
          descricao="Cursou Enegenharia Industrial Mecânica em Curitiba." 
        />
        
        <CardGrande 
          imagem="https://lh3.googleusercontent.com/proxy/ugk86YCTeHWFpRJ1kZk5wNYKYHA-X47Ujj3kChLBfIJWWuPdwLYuI8TZfPbHnJQghBCz8q4BZaZYGI8PZfvhsr4p-r_1KObzsXvqrhWOkfIV3ZUS_c0j7992v3R-de-sU4BxrDyIod4LxqU" 
          nome="Conservatório e Faculdade Souza Lima" 
          descricao="Cursou o conservátorio e a faculdade (bacharelado em música - guitarra) em São Paulo." 
        />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="http://www.fretsguitarcentre.co.uk/contents/media/l_dsc_0857150219.jpg" 
          nome="Músico" 
          descricao="Atuou como músico e professor particular de violão e guitarra em Curitiba." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
