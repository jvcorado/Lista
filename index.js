const dataInput = document.querySelector("#data");
const tituloInput = document.querySelector("#titulo");
const textInput = document.querySelector("#text");
const autorInput = document.querySelector("#autor");
const content = document.querySelector(".content");
const inputFile = document.querySelector(".picture_input");
const pictureImage = document.querySelector(".picture_image");
const pictureImageTxt = "Choose an image";
pictureImage.innerHTML = pictureImageTxt;




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
inputFile.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();
        reader.addEventListener('load', function(e){
            const readerTarget = e.target;
            const imgFeita = document.createElement('img');
            imgFeita.src = readerTarget.result;
            imgFeita.classList.add('picture_img');
            pictureImage.innerHTML = '';
            pictureImage.appendChild(imgFeita);
            

    });
        reader.readAsDataURL(file);
        pictureImage.innerHTML = 'Image selected';
    }
    else{
        pictureImage.innerHTML = pictureImageTxt;
    }
});

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