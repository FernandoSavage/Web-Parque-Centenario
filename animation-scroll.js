// Inicializa ScrollReveal
window.sr = ScrollReveal();

// Configuración de animación
const animationConfig = {
    duration: 1000,
    origin: 'bottom',
    distance: '-100px'
};

const animationConfigLeft = {
    duration: 5000,
    origin: 'left',
    distance: '-100px'
}

// Aplica ScrollReveal a los elementos
sr.reveal('.nv-bg', animationConfig);
sr.reveal('.row', animationConfig);
sr.reveal('.slider-noticias', animationConfigLeft);
sr.reveal('.noticia', animationConfigLeft);
sr.reveal('.lazy-p', animationConfigLeft);
sr.reveal('.column-noticias', animationConfigLeft)
