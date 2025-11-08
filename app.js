// Array de músicas (nosso "banco de dados" falso)
const musicas = [
    {
        titulo: "Bohemian Rhapsody",
        artista: "Queen",
        capaUrl: "https://example.com/bohemian-rhapsody.jpg"
    },
    {
        titulo: "Billie Jean",
        artista: "Michael Jackson",
        capaUrl: "https://example.com/billie-jean.jpg"
    },
    {
        titulo: "Imagine",
        artista: "John Lennon",
        capaUrl: "https://example.com/imagine.jpg"
    }
];

// Função para renderizar as músicas no DOM
function renderizarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    
    // Limpa o conteúdo atual
    container.innerHTML = '';
    
    // Percorre o array de músicas e cria um card para cada uma
    musicas.forEach(musica => {
        const card = document.createElement('div');
        card.className = 'musica-card';
        
        card.innerHTML = `
            <img src="${musica.capaUrl}" alt="Capa do álbum ${musica.titulo}">
            <div class="musica-info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Chama a função quando a página carrega
document.addEventListener('DOMContentLoaded', renderizarMusicas);