function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'Kaua' && senha == 'lindao'){
        alert('Vamos entrar!!')
        location.href='/SIstema-escolar/Inter.html';
    }else{
        alert('Nome ou senhar Errada!!')
    }
}