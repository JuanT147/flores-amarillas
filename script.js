const container = document.getElementById("flowers-container");

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Usamos emoji en lugar de círculo
    flower.innerHTML = "🌼";

    // Posición horizontal aleatoria
    flower.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio más natural
    const size = Math.random() * 20 + 15;
    flower.style.fontSize = size + "px";

    // Quitamos fondo porque ahora es emoji
    flower.style.background = "none";

    // Duración de caída (más variación)
    const duration = Math.random() * 6 + 6;
    flower.style.animationDuration = duration + "s";

    // Rotación inicial aleatoria
    const rotation = Math.random() * 360;
    flower.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(flower);

    // Eliminar después de terminar animación
    setTimeout(() => {
        flower.remove();
    }, duration * 1000);
}

// Crear flores constantemente
setInterval(createFlower, 250);

document.addEventListener('DOMContentLoaded', () => {
    const btnMusica = document.getElementById('btnMusica');
    const audio = document.getElementById('audioFondo');
    const iconoRosa = btnMusica.querySelector('.icono-rosa');
    const estadoTexto = document.getElementById('estadoTexto');

    btnMusica.addEventListener('click', () => {
        // Si la música está pausada, la reproducimos
        if (audio.paused) {
            audio.play().then(() => {
                btnMusica.classList.add('sonando');
                iconoRosa.textContent = '🌹✨';
                estadoTexto.textContent = 'Pausar música ⏸️';
            }).catch(error => {
                console.log("Error al reproducir el audio: ", error);
            });
        } else {
            // Si ya está sonando, la pausamos
            audio.pause();
            btnMusica.classList.remove('sonando');
            iconoRosa.textContent = '🌹';
            estadoTexto.textContent = 'Toca para escuchar 🎵';
        }
    });
});