console.log("page loaded...");

const mainVideo = document.getElementById('mainVideo');
const videoTitle = document.getElementById('videoTitle');
const videoInfo = document.getElementById('videoInfo');
const smallVideos = document.querySelectorAll('.video-small');

function updateMainVideo(src, title, info) {
    mainVideo.src = src;
    mainVideo.load();
    mainVideo.muted = true; // Silenciar el video para permitir la reproducción automática
    mainVideo.play().then(() => {
        console.log("Video started playing automatically");
    }).catch(error => {
        console.log("Auto-play was prevented:", error);
        // Intenta reproducir nuevamente después de un breve retraso
        setTimeout(() => mainVideo.play(), 1000);
    });
    videoTitle.textContent = title;
    videoInfo.textContent = info;
}

mainVideo.addEventListener('mouseover', function() {
    if (this.paused) {
        this.play().catch(error => {
            console.log("Auto-play was prevented:", error);
        });
    }
});

mainVideo.addEventListener('mouseout', function() {
    this.pause();
});

smallVideos.forEach(video => {
    video.addEventListener('mouseover', function() {
        const src = this.getAttribute('data-src');
        const title = this.getAttribute('data-title');
        const info = this.getAttribute('data-info');
        updateMainVideo(src, title, info);
    });
});

// Agregar un botón para activar/desactivar el sonido
const muteButton = document.createElement('button');
muteButton.textContent = 'Unmute';
muteButton.className = 'mute-button';
document.querySelector('.col-l').appendChild(muteButton);

muteButton.addEventListener('click', () => {
    mainVideo.muted = !mainVideo.muted;
    muteButton.textContent = mainVideo.muted ? 'Unmute' : 'Mute';
});