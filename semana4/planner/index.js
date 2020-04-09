function adicionarItem() {
    
    var dia = document.getElementById("dia").value;
    
    const input = document.querySelector("input");
    
    const novoItem = input.value;
    
    if(novoItem === "") {

        alert("Insira um item");

    } else {

        const listaDeTarefas = document.getElementById(dia);

        listaDeTarefas.innerHTML += "<li>" + novoItem + "</li>";
    
        input.value = "";
    }
}

