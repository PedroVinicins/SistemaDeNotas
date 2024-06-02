// Função para adicionar uma nova linha à tabela com os dados do formulário
function cadPessoa() {
    const materia = document.getElementById('materias').value;
    const trabalho = document.getElementById('trabalho').value;
    const prova = document.getElementById('prova').value;

    if (trabalho === '' || prova === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const tabela = document.getElementById('tabelaMaterias').getElementsByTagName('tbody')[0];
    const novaLinha = tabela.insertRow();
    const cellMateria = novaLinha.insertCell(0);
    const cellTrabalho = novaLinha.insertCell(1);
    const cellProva = novaLinha.insertCell(2);

    cellMateria.innerHTML = materia.charAt(0).toUpperCase() + materia.slice(1);
    cellTrabalho.innerHTML = trabalho;
    cellProva.innerHTML = prova;

    salvarTabela();

    document.getElementById('trabalho').value = '';
    document.getElementById('prova').value = '';

    return false;
}

// Função para salvar os dados da tabela no localStorage
function salvarTabela() {
    const tabela = document.getElementById('tabelaMaterias').getElementsByTagName('tbody')[0];
    const linhas = tabela.rows;
    const dadosTabela = [];

    for (let i = 0; i < linhas.length; i++) {
        const celulas = linhas[i].cells;
        const materia = celulas[0].innerText;
        const trabalho = celulas[1].innerText;
        const prova = celulas[2].innerText;

        dadosTabela.push({ materia, trabalho, prova });
    }

    localStorage.setItem('tabelaMaterias', JSON.stringify(dadosTabela));
}

// Função para carregar os dados da tabela do localStorage
function carregarTabela() {
    const dadosTabela = JSON.parse(localStorage.getItem('tabelaMaterias')) || [];
    const tabela = document.getElementById('tabelaMaterias').getElementsByTagName('tbody')[0];

    for (const dado of dadosTabela) {
        const novaLinha = tabela.insertRow();
        const cellMateria = novaLinha.insertCell(0);
        const cellTrabalho = novaLinha.insertCell(1);
        const cellProva = novaLinha.insertCell(2);

        cellMateria.innerHTML = dado.materia;
        cellTrabalho.innerHTML = dado.trabalho;
        cellProva.innerHTML = dado.prova;
    }
}

// Função para limpar todos os dados da tabela e do localStorage
function limparTabela() {
    const tabela = document.getElementById('tabelaMaterias').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa todas as linhas da tabela
    localStorage.removeItem('tabelaMaterias'); // Remove os dados do localStorage
}

// Carregar a tabela quando a página for carregada
window.onload = carregarTabela;
