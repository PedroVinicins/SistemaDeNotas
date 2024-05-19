function cadPessoa() {
    // Obtém os valores dos inputs
    var materia = document.getElementById('materias').value;
    var trabalho = document.getElementById('trabalho').value;
    var prova = document.getElementById('prova').value;

    // Verifica se todos os campos estão preenchidos
    if (!materia | !trabalho || !prova) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Cria uma nova linha e adiciona à tabela
    var tabela = document.getElementById('tabelaMaterias').getElementsByTagName('tbody')[0];
    var novaLinha = tabela.insertRow();

    var celulaMateria = novaLinha.insertCell(0);
    var celulaTrabalho = novaLinha.insertCell(1);
    var celulaProva = novaLinha.insertCell(2);

    celulaMateria.innerHTML = materia;
    celulaTrabalho.innerHTML = trabalho;
    celulaProva.innerHTML = prova;

    // Limpa os campos do formulário
    document.getElementById('trabalho').value = '';
    document.getElementById('prova').value = '';
}