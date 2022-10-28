const userInput = document.querySelector("#user");
const senhaInput = document.querySelector("#senha");
const dataInput = document.querySelector("#data");
const tituloInput = document.querySelector("#titulo");
const textInput = document.querySelector("#text");
const autorInput = document.querySelector("#autor");
const content = document.querySelector(".content");

const post = [
  
];

function reset(){
    dataInput.value = ''
    autorInput.value = ''
    tituloInput.value = ''
    textInput.value = ''
}

function logar(){
    if(userInput.value === 'admin' && senhaInput.value === 'admin'){
        location.href ="http://www.mozilla.org"
    }
    else{
        alert('User ou senha invalidos')
    }
}


function publicar(){

    const card = document.createElement('div');
    const cimage = document.createElement('img');
    const cbody = document.createElement('div');
    const cdata = document.createElement('p');
    const ctitle = document.createElement('h5');
    const ctext = document.createElement('p');
    const cautor = document.createElement('p');

    card.classList.add('card');
    card.style.width = '100%';
    card.style.margin = '10px';
    cimage.classList.add('card-image-top');
    cbody.classList.add('card-body');
    ctitle.classList.add('card-title');
    ctext.classList.add('card-text');
    cautor.classList.add('card-text'); 


    
    if(!dataInput.value == '' && !tituloInput.value == '' && !textInput.value == '' && !autorInput.value ==''){
        

        cdata.append(dataInput.value);
        ctitle.append(tituloInput.value)
        ctext.append(textInput.value)
        cautor.append(autorInput.value)
        content.appendChild(card)
        card.appendChild(ctext)
        card.appendChild(cimage)
        card.appendChild(cbody)
        cbody.appendChild(cdata)
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