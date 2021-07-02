let nome = document.querySelector('#nome');
let idade = document.querySelector('#idade');
let oi = document.querySelector('#oi');

function cliqueiNoBotao() {
    if(nome.value != "" && nome.idade != ""){
        oi.innerHTML = `Olá ${nome.value}, seja bem-vindo(a) flor do dia . Você tem ${idade.value} anos.`;
    }else{
        alert('Campos Obrigatórios !');
    }
}