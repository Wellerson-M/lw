document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.car-card').forEach(card => {
            if (filter === 'all' || card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function aplicarFiltroCategoria(categoria) {
    document.querySelectorAll('.car-card').forEach(card => {
        if (categoria === 'all' || card.classList.contains(categoria)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Filtro por botão
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filtro = button.getAttribute('data-filter');
        aplicarFiltroCategoria(filtro);
    });
});

// Filtro pela URL
const urlParams = new URLSearchParams(window.location.search);
const categoriaParam = urlParams.get('categoria');
if (categoriaParam) {
    aplicarFiltroCategoria(categoriaParam);
}

const buscaParam = urlParams.get('busca');
if (buscaParam) {
    const termo = buscaParam.toLowerCase();
    document.querySelectorAll('.car-card').forEach(card => {
        const titulo = card.querySelector('.card-title').innerText.toLowerCase();
        const desc = card.querySelector('.card-text').innerText.toLowerCase();
        if (titulo.includes(termo) || desc.includes(termo)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

//Status logado
window.addEventListener("DOMContentLoaded", () => {
    const nome = localStorage.getItem("usuarioLogado");

    const navbar = document.querySelector(".login");
    if (nome && navbar) {
        navbar.innerHTML = `
  <li class="nav-item d-flex align-items-center text-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
        class="bi bi-person me-2" viewBox="0 0 16 16">
        <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
    </svg>
    <span class="me-3">Bem-vindo, ${nome}</span>
    <a href="#" class="nav-link text-white px-2" id="logout">Sair</a>
  </li>
`;

        document.querySelector("#logout").addEventListener("click", () => {
            localStorage.removeItem("usuarioLogado");
            window.location.href = "/Index.html"; // ou login.html
        });
    }
});