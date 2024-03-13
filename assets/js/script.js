var emailorphone_input = document.getElementById('emailorphone-input');
var mensagem_erro = document.getElementById('mensagem-erro');
var emailorphone_label = document.getElementById('emailorphone-label');
var senha = document.getElementById('senha');
var input_label_senha = document.getElementById('input-label-senha');
var mensagem_erro_senha = document.getElementById('mensagem-erro-senha');
var mostrar = document.getElementById('mostrar');

var opcao_1 = document.getElementById('opcao_1');
var opcao_2 = document.getElementById('opcao_2');

emailorphone_input.addEventListener('blur',function(){
    if(emailorphone_input.value.length==0){
        mensagem_erro.style.visibility = 'visible';
    }
    else{
        mensagem_erro.style.visibility = 'hidden';
    }
})

senha.addEventListener('focus',function(){
    mostrar.style.visibility = 'visible';
})



senha.addEventListener('blur',function(){

    if(senha.value.length==0){
        mensagem_erro_senha.style.visibility = 'visible';
    }
    else{
        mensagem_erro_senha.style.visibility = 'hidden';
    }

    setTimeout(function(){
        mostrar.style.visibility = 'hidden';
    },100)  
})




mostrar.addEventListener('click',function(event){
    event.preventDefault();
    
    if(mostrar.textContent=='Mostrar'){
        senha.setAttribute('type', 'text');
        senha.setAttribute('title', 'Exibir Senha');
        mostrar.textContent = 'Ocultar';
    }
    else if(mostrar.textContent=='Ocultar'){
        senha.setAttribute('type', 'password');
        senha.setAttribute('title', 'Ocultar Senha');
        mostrar.textContent = 'Mostrar';
    }
    
})

function change_language(){
    opcao_1.textContent = 'Portuguese';
    opcao_2.textContent = 'English';
    
    portugues = document.getElementsByClassName('pt');
    for(pt of portugues){
        pt.style.display = 'none';
    }
    
    english = document.getElementsByClassName('en');
    for(en of english){
        en.style.display = 'inline';
    }
    

}

function trocar_idioma(){
    opcao_1.textContent = 'Português';
    opcao_2.textContent = 'Inglês';

    english = document.getElementsByClassName('en');
    for(en of english){
        en.style.display = 'none';
    }

    portugues = document.getElementsByClassName('pt');
    for(pt of portugues){
        pt.style.display = 'inline';
    }
    
}

idioma.addEventListener('change',function(){

    if(idioma.value==1){
        trocar_idioma();
    }
    else{
        change_language();
    }
})
