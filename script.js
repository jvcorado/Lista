const post = [];

function criarPostagem(titulo, mensagem,autor){
    return {
        titulo,
        mensagem,
        autor
    }
}

function listaPost(){
    const tbody = document.querySelector('#tbody')
    tbody.innerHTML = ''
  
    for(let i = 0; i< post.length; i++){
        
        let  tr = tbody.insertRow()
        let  titulo = tr.insertCell();
        let  mensagem = tr.insertCell();
        let  autor = tr.insertCell();

        titulo.innerHTML = post[i].titulo;
        mensagem.innerHTML = post[i].mensagem;
        autor.innerHTML = post[i].autor;
    }
}

function publicar(){
    const titulo = document.querySelector('#titulo').value
    const mensagem = document.querySelector('#mensagem').value
    const autor = document.querySelector('#autor').value
    let add = post.push(criarPostagem(titulo,mensagem,autor))
    console.log(post)
    listaPost()
}









