// Selecionando todos os elementos com a classe 'container-itens'
var containers = document.querySelectorAll('.container');

// Iterando sobre cada container
containers.forEach(function (container) {
    container.addEventListener('click', function () {
        // Selecionando os itens dentro do contêiner clicado
        var itens = container.nextElementSibling;

        // Alternando entre as classes 'show' e 'hide' usando toggle
        itens.classList.toggle('show');
        itens.classList.toggle('hide');
    });
});
