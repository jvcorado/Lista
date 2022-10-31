const dataInput = document.querySelector("#data");
const tituloInput = document.querySelector("#titulo");
const textInput = document.querySelector("#text");
const autorInput = document.querySelector("#autor");
const content = document.querySelector(".content");

let id = 0;

const blog = {
    posts:[]
};

function reset(){
    dataInput.value = '';
    tituloInput.value = '';
    textInput.value = '';
    autorInput.value = '';
}

function create(){

    if(!dataInput.value == '' && !tituloInput.value == '' && !textInput.value == '' && !autorInput.value ==''){
        console.log(blog.posts.push({id: blog.posts.length +1, data:dataInput.value, titulo: tituloInput.value , content: textInput.value, autor: tituloInput.value}));
        read();
        reset();
    }
    else{
        alert('Preencha os campos');
    }
}

function read(){
    
    const card = document.createElement('div');
    const cimage = document.createElement('img');
    const cbody = document.createElement('div');
    const cdata = document.createElement('p');
    const ctitle = document.createElement('h5');
    const ctext = document.createElement('p');
    const cautor = document.createElement('p');
    const cid = document.createElement('p');
    const cremover = document.createElement('button');
    const catualizar = document.createElement('button');

    
    card.classList.add('card');
    card.setAttribute('key', id++)
    card.style.width = '100%';
    card.style.margin = '10px';
    cimage.classList.add('card-image-top');
    cbody.classList.add('card-body');
    ctitle.classList.add('card-title');
    ctext.classList.add('card-text');
    cautor.classList.add('card-text');
    cremover.classList.add('btn');

    cremover.classList.add('w-25');
    cremover.classList.add('btn-danger');
    cremover.appendChild(document.createTextNode('Remover'));
    catualizar.classList.add('btn');
    catualizar.classList.add('w-25');
    catualizar.classList.add('ms-2');
    catualizar.classList.add('btn-primary');
    catualizar.appendChild(document.createTextNode('atualizar'));
    //cid.classList.add('card-text');

    cdata.append(dataInput.value);
    ctitle.append(tituloInput.value);
    ctext.append(textInput.value);
    cautor.append(autorInput.value);
    //cid.append(id);
    content.appendChild(card);
    card.appendChild(ctext);
    //card.appendChild(cimage);
    card.appendChild(cbody);
    cbody.appendChild(cdata);
    cbody.appendChild(ctitle);
    cbody.appendChild(ctext);
    cbody.appendChild(cautor);
    cbody.appendChild(cremover);
    cbody.appendChild(catualizar);
    //cbody.appendChild(cid);
    return blog.posts;
} 


function update(){
    
}

function remover(){

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
        let add = blog.posts.push({titulo: tituloInput.value , text: textInput.value, autor: tituloInput.value})
        reset();
     
    }
    else{
        alert('Preencha os campos')
    }
}