document.getElementById('salvarBtn').addEventListener('click', function() {
    let nome = document.getElementById('nomeInput').value;

    localStorage.setItem('nome', nome);

    alert('Login salvo com sucesso!');
});

function abrirHTML(pagina) {
    if (pagina === 'notas') {
        window.open('/SISTEMA DE DADOS ESCOLAR/SISTEMA DE NOTAS/Sistema.html', '_blank');
    } else if (pagina === 'presença') {
        window.open('/SISTEMA DE PRESENÇA/index.html', '_blank');
    }

    else if (pagina === 'logo') {
        window.open('/SISTEMA DE DADOS ESCOLAR/MEU-SITE/index.html', '_self');
    }
}

