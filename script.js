const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songList = document.getElementById('song-list');
let currentSongIndex = 0;
let songs = [];

async function fetchSongs() {
    try {
        const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart'); // Use CORS proxy if needed
        const data = await response.json();
        songs = data.tracks.data.map(track => ({
            title: track.title,
            url: track.preview
        }));
        renderPlaylist();
        loadSong(currentSongIndex);
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

function renderPlaylist() {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.dataset.src = song.url;
        if (index === currentSongIndex) {
            li.classList.add('active');
        }
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
        });
        songList.appendChild(li);
    });
}

function loadSong(index) {
    const selectedSong = songs[index];
    const songItems = Array.from(songList.querySelectorAll('li'));
    songItems.forEach(song => song.classList.remove('active'));
    songItems[index].classList.add('active');
    audioPlayer.src = selectedSong.url;
    audioPlayer.play();
}

playButton.addEventListener('click', () => {
    audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
});

// Fetch songs from Deezer API on load
fetchSongs();
