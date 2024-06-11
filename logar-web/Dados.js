function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'Pedro' && senha == 'Vinicius'){
        alert('Vamos entrar!!')
        location.href='/Inter.html';
    }else{
        alert('Nome ou senhar Errada!!')
    }
}