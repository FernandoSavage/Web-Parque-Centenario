let sliderInner = document.querySelector(".slider--inner");
let images = sliderInner.querySelectorAll("img");

let index = 0;

function moveToNextSlide() {
    

    // Establecer la opacidad de todas las imágenes en 0
    images.forEach(img => img.style.opacity = 0);

    // Mover el slider
    let percentage = index * -100; // Asegúrate de que este porcentaje es el correcto
    sliderInner.style.transform = "translateX(" + percentage + "%)";

    // Establecer la opacidad de la imagen activa en 1
    images[index].style.opacity = 1;

    // Incrementar el índice
    index++;
    
    if (index >= images.length) {
        index = 0;
    }
}

// Ajustar el intervalo si es necesario
setInterval(moveToNextSlide, 2000);
