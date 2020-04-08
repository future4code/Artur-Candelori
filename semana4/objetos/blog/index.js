function enviarPost(){
    
    const post = document.getElementById("post")
    const autor = document.getElementById("autor")
    const titulo = document.getElementById("titulo")
    const conteudo = document.getElementById("conteudo")

    post.innerHTML += "<p>"+autor.value+" "+titulo.value+" "+conteudo.value+"</p>"
                                                                                   
}