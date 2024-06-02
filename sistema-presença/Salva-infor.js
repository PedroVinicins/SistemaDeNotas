 // Função para salvar o estado das checkboxes no localStorage
 function saveCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
    alert('Estados salvos!');
}

// Função para carregar o estado das checkboxes do localStorage
function loadCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        const checked = localStorage.getItem(checkbox.id) === 'true';
        checkbox.checked = checked;
    });
}

// Função para resetar o estado das checkboxes
function resetCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
        localStorage.removeItem(checkbox.id);
    });
    alert('Estados resetados!');
}

// Carregar o estado das checkboxes quando a página é carregada
window.onload = loadCheckboxes;