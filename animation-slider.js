document.addEventListener('DOMContentLoaded', function () {
    let sliderInner = document.querySelector(".slider--inner");
    let images = sliderInner.querySelectorAll("img");
    let botonesSiguiente = document.querySelectorAll(".siguiente");
    
    let index = 0;
    let intervalo;

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

    function moveToPreviousSlide() {
        // Establecer la opacidad de todas las imágenes en 0
        images.forEach(img => img.style.opacity = 0);

        // Mover el slider hacia atrás
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        let percentage = index * -100; // Asegúrate de que este porcentaje es el correcto
        sliderInner.style.transform = "translateX(" + percentage + "%)";

        // Establecer la opacidad de la imagen activa en 1
        images[index].style.opacity = 1;
    }

    function resetInterval() {
        clearInterval(intervalo);
        intervalo = setInterval(moveToNextSlide, 2000);
    }

    // Manejar el clic del botón "Siguiente" y "Anterior"
    botonesSiguiente.forEach(boton => {
        boton.addEventListener('click', function () {
            if (this.querySelector('i').classList.contains('fi-rr-angle-right')) {
                moveToNextSlide();
            } else if (this.querySelector('i').classList.contains('fi-rr-angle-left')) {
                moveToPreviousSlide();
            }
            resetInterval(); // Reiniciar el intervalo al hacer clic
        });
    });

    // Inicializar opacidad de la primera imagen
    images.forEach((img, i) => img.style.opacity = i === 0 ? 1 : 0);

    // Inicializar intervalo automático
    intervalo = setInterval(moveToNextSlide, 2000);
});
