function enviarPost(){
    
    const post = document.getElementById("post")
    const autor = document.getElementById("autor")
    const titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")

    post.innerHTML += "<h2>"+titulo.value+"</h2>"
    post.innerHTML += "<p>por "+autor.value+"</p>"
    post.innerHTML += "<p>"+conteudo.value+"</p>"
                                                                                   
}