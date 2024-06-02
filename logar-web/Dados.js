function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'Pedro' && senha == 'vinicius'){
        alert('Vamos entrar!!')
        location.href='/SISTEMA DE NOTAS/Sistema.html';
    }else{
        alert('Nome ou senhar Errada!!')
    }
}