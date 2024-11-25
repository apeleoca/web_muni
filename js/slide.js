let currentIndex = 0;
const images = document.querySelector('.slider');
const totalImages = document.querySelectorAll('.slider img').length;
const imageWidth = 500; // Ancho de cada imagen
const imageMargin = 10; // Margen entre las imágenes
const movement = imageWidth * 0.3 + imageMargin; // Desplazamiento de la mitad del ancho de la imagen + margen

function moveSlider() {
    if (currentIndex >= totalImages - 1) {
        currentIndex = 0; // Si llegamos al final, volvemos al inicio
    } else {
        currentIndex++;
    }
    images.style.transform = `translateX(-${currentIndex * movement}px)`; // Mueve menos (mitad de la imagen)
}

setInterval(moveSlider, 3000); // Mueve las imágenes cada 3 segundos
