document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll('.slider-noticias .noticia, .slider-noticas .lazy-p, .column-noticias');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                if (element.classList.contains('noticia')) {
                    element.src = element.dataset.src; // Cambiar el atributo `src` por el valor en `data-src`
                }

                element.classList.add('loaded'); // Agregar clase para mostrar el elemento
                observer.unobserve(element); // Dejar de observar el elemento una vez cargado
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        root: null, // Observa el viewport actual
        rootMargin: '0px', // Sin margen adicional
        threshold: 0.1 // El 10% del elemento debe estar visible para cargarlo
    });

    lazyElements.forEach(element => {
        observer.observe(element); // Observa cada elemento
    });
});
