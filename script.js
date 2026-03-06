particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#00ff99" },
        opacity: { value: 0.3 },
        size: { value: 2 },
        line_linked: {
            enable: true,
            color: "#00ff99",
            opacity: 0.1
        },
        move: { enable: true, speed: 1 }
    }
});

// Typewriter
const elemento = document.getElementById("texto-animado");
if (elemento) {
    const palabras = ["Systems Engineering and Computer Science"];
    let i = 0;
    let j = 0;
    let escribiendo = true;

    function typewriter() {
        if (escribiendo) {
            elemento.textContent = palabras[i].substring(0, j++);
            if (j > palabras[i].length) {
                escribiendo = false;
                setTimeout(typewriter, 1500);
                return;
            }
        } else {
            elemento.textContent = palabras[i].substring(0, j--);
            if (j < 0) {
                escribiendo = true;
                i = (i + 1) % palabras.length;
            }
        }
        setTimeout(typewriter, 100);
    }
    typewriter();
}

// About btn
const aboutBtn = document.querySelector('.about-btn');
if (aboutBtn) {
    aboutBtn.addEventListener('click', function() {
        document.querySelector('.about-content').classList.toggle('activo');
        this.textContent = this.textContent.includes('+') ? 'About me −' : 'About me +';
    });
}

 
// FILTROS DE PROYECTOS 

const filtros = document.querySelectorAll('.filtro-btn');
const cards   = document.querySelectorAll('.proyecto-card');

filtros.forEach(btn => {
    btn.addEventListener('click', () => {
        // Activo visual
        filtros.forEach(b => b.classList.remove('activo-filtro'));
        btn.classList.add('activo-filtro');

        const filtro = btn.dataset.filter;

        cards.forEach(card => {
            const coincide = filtro === 'all' || card.dataset.category === filtro;
            card.classList.toggle('hidden', !coincide);
        });
    });
});

// Menú hamburguesa para navegación en móvil
const navToggle = document.querySelector('.nav-toggle');
const headerEl = document.querySelector('header');

if (navToggle && headerEl) {
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    // Cerrar menú al hacer click en cualquier enlace de navegación
    headerEl.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });
}
// Header transparente en home, proyectos y blog
const path = window.location.pathname;
const header = document.querySelector('header');

const paginasTransparentes = ['/', '/index.html', '/proyectos/proyectos.html', '/blog/blog.html'];

if (paginasTransparentes.includes(path)) {
    header.classList.add('header-transparente');
}