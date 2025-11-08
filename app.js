// Array de músicas (nosso "banco de dados" falso)
const musicas = [
    {
        titulo: "Lost in Paradise",
        artista: "Aurora Dreams",
        capaUrl: "https://source.unsplash.com/random/400x400?sunset",
        favorito: false,
        playlists: []
    },
    {
        titulo: "Mountain Echo",
        artista: "Nature Sounds",
        capaUrl: "https://source.unsplash.com/random/400x400?mountain",
        favorito: false,
        playlists: []
    },
    {
        titulo: "Ocean Breeze",
        artista: "Waves & Wind",
        capaUrl: "https://source.unsplash.com/random/400x400?ocean",
        favorito: false,
        playlists: []
    },
    {
        titulo: "Forest Whispers",
        artista: "Green Harmony",
        capaUrl: "https://source.unsplash.com/random/400x400?forest",
        favorito: false,
        playlists: []
    },
    {
        titulo: "Northern Lights",
        artista: "Arctic Dreams",
        capaUrl: "https://source.unsplash.com/random/400x400?aurora",
        favorito: false,
        playlists: []
    },
    {
        titulo: "Desert Wind",
        artista: "Sand & Stars",
        capaUrl: "https://source.unsplash.com/random/400x400?desert",
        favorito: false,
        playlists: []
    }
];

// Função para renderizar as músicas no DOM
function renderizarMusicas() {
    const container = document.getElementById('lista-de-musicas');
    container.innerHTML = '';
    
    musicas.forEach((musica, index) => {
        const card = document.createElement('div');
        card.className = 'musica-card';
        
        card.innerHTML = `
            <img src="${musica.capaUrl}" alt="Capa do álbum ${musica.titulo}">
            <div class="musica-info">
                <h3>${musica.titulo}</h3>
                <p>${musica.artista}</p>
                <div class="card-actions">
                    <button onclick="toggleFavorito(${index})" class="favorite-btn">
                        <i class="fas fa-heart ${musica.favorito ? 'active' : ''}"></i>
                    </button>
                    <button onclick="adicionarPlaylist(${index})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button onclick="playMusica(${index})">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Função para alternar favorito
function toggleFavorito(index) {
    musicas[index].favorito = !musicas[index].favorito;
    renderizarMusicas();
}

// Função para adicionar à playlist
function adicionarPlaylist(index) {
    const playlistName = prompt('Digite o nome da playlist:');
    if (playlistName) {
        musicas[index].playlists.push(playlistName);
        alert(`Música adicionada à playlist: ${playlistName}`);
    }
}

// Função para simular reprodução
function playMusica(index) {
    const musica = musicas[index];
    const nowPlaying = document.querySelector('.now-playing');
    const trackInfo = nowPlaying.querySelector('.track-info');
    const playBtn = document.querySelector('.play-btn i');
    
    // Atualiza informações do player
    nowPlaying.querySelector('img').src = musica.capaUrl;
    trackInfo.querySelector('h4').textContent = musica.titulo;
    trackInfo.querySelector('p').textContent = musica.artista;
    
    // Alterna ícone de play/pause
    playBtn.classList.toggle('fa-play');
    playBtn.classList.toggle('fa-pause');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    renderizarMusicas();
    
    // Adiciona funcionalidade aos botões de visualização
    const viewButtons = document.querySelectorAll('.view-options button');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Alterna entre visualização em grade e lista
            const lista = document.getElementById('lista-de-musicas');
            if (button.querySelector('.fa-list')) {
                lista.style.gridTemplateColumns = '1fr';
            } else {
                lista.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
            }
        });
    });
    
    // Adiciona funcionalidade à barra de busca
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.musica-card');
        
        cards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const artist = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || artist.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});