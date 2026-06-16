// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", function() {
    
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Função para mostrar o item baseado no índice
    function showItem(index) {
        // Remove a classe ativa de todos
        items.forEach(item => item.classList.remove('active'));
        
        // Garante que o índice fique dentro dos limites (looping)
        if (index >= items.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = items.length - 1;
        } else {
            currentIndex = index;
        }

        // Adiciona a classe ativa no item atual
        items[currentIndex].classList.add('active');
    }

    // Eventos dos botões
    nextBtn.addEventListener('click', () => {
        showItem(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showItem(currentIndex - 1);
    });

    // Mudança automática a cada 5 segundos
    setInterval(() => {
        showItem(currentIndex + 1);
    }, 5000);
});
