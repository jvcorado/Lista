const userInput = document.querySelector("#user");
const senhaInput = document.querySelector("#senha");

function logar(){
    if(userInput.value == 'admin' && senhaInput.value == 'admin'){
        return window.location.href='index.html'
        
    }
    else{
        alert('User ou senha invalidos')
    }
}