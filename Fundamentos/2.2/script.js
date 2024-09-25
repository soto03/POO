console.log("page loaded...");

// Obtener el elemento de video
const video = document.getElementById('myVideo');

// Agregar evento onmouseover
video.addEventListener('mouseover', function() {
    video.play();
});

// Agregar evento onmouseout
video.addEventListener('mouseout', function() {
    video.pause();
});