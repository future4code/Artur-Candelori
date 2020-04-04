/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Bem vindo ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {

   let cartasUsuario = [comprarCarta(),comprarCarta()];
   let pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
   
   let cartasComputador = [comprarCarta(),comprarCarta()];
   let pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;
   
   //item 8//
   while (cartasUsuario[0].valor === 11 && cartasUsuario[1].valor === 11) {
      cartasUsuario = [comprarCarta(),comprarCarta()];
      pontuacaoUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor;
   }
   while (cartasComputador[0].valor === 11 && cartasComputador[1].valor === 11) {
      cartasComputador = [comprarCarta(),comprarCarta()];
      pontuacaoComputador = cartasComputador[0].valor + cartasComputador[1].valor;
   }

   //itens 9 e 10//
   let mensagemUsuario = cartasUsuario[0].texto+" "+cartasUsuario[1].texto;              
   while (confirm("Suas cartas são "+mensagemUsuario+". A carta revelada do computador é "+cartasComputador[0].texto+
                  "\n"+
                  "Deseja comprar mais uma carta?")) {

      const carta = comprarCarta();
      cartasUsuario.push(carta);
      mensagemUsuario += " "+carta.texto;
      pontuacaoUsuario += carta.valor;

   }
      //item 11//
      let mensagemComputador = cartasComputador[0].texto +" "+ cartasComputador[1].texto;

      while (pontuacaoComputador < pontuacaoUsuario) {
         const carta = comprarCarta();
         cartasComputador.push(carta);
         mensagemComputador += " "+carta.texto;
         pontuacaoComputador += carta.valor;
      }

      let mensagemFinal = "";
      //item 12//
      if(pontuacaoUsuario > 21) {
         mensagemFinal = "O computador venceu!";
      }
      if(pontuacaoUsuario < 21 && pontuacaoComputador > 21) {
         mensagemFinal = "O usuário venceu!";
      }
      if(pontuacaoComputador < 21 && pontuacaoComputador > pontuacaoUsuario) {
         mensagemFinal = "O computador venceu!";
      }
      if(pontuacaoUsuario === pontuacaoComputador) {
         mensagemFinal = "Empate!";
      }
      alert("Suas cartas são "+mensagemUsuario+". Sua pontuação é "+pontuacaoUsuario+".\n" +
            "As cartas do computador são "+mensagemComputador+". A pontuação do computador é "+pontuacaoComputador+".\n" +
            mensagemFinal);  
      
}  else {
   alert("O jogo acabou.");
}
