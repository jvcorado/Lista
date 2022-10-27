const tituloInput = document.querySelector("#titulo")
const textInput = document.querySelector("#text")
const autorInput = document.querySelector("#autor")
const content = document.querySelector(".content")

const post = [
    {
        titulo,
        text,
        autor,
    }
    
];

function reset(){
    autorInput.value = ''
    tituloInput.value = ''
    textInput.value = ''
}

function publicar(){

    const card = document.createElement('div');
    const cbody = document.createElement('div');
    const ctitle = document.createElement('h5');
    const ctext = document.createElement('p');
    const cautor = document.createElement('p');

    card.classList.add('card') 
    card.style.width = '100%'
    card.style.margin = '10px'
    cbody.classList.add('card-body')
    ctitle.classList.add('card-title')
    ctext.classList.add('card-text')
    cautor.classList.add('card-text')
    
    if(!tituloInput.value == '' && !textInput.value == '' && !autorInput.value ==''){
        ctitle.append(tituloInput.value)
        ctext.append(textInput.value)
        cautor.append(autorInput.value)
        content.appendChild(card)
        card.appendChild(cbody)
        cbody.appendChild(ctitle)
        cbody.appendChild(ctext)
        cbody.appendChild(cautor)
        let add = post.push({titulo: tituloInput.value , text: textInput.value, autor: tituloInput.value})
        localStorage.setItem('post', add);
        reset()
    }
    else{
        alert('Preencha os campos')
    }
        

    

}