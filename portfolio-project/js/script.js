document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Menú Móvil ---
    const menuBtn = document.getElementById('menu-btn');
    const menuMovil = document.getElementById('menu-movil');
    if (menuBtn && menuMovil) {
        menuBtn.addEventListener('click', () => {
            menuMovil.classList.toggle('hidden');
        });
        // Cierra el menú al hacer clic en un enlace
        menuMovil.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuMovil.classList.add('hidden');
            });
        });
    }

    // --- Efecto Spotlight del Cursor ---
    const body = document.body;
    body.addEventListener('mousemove', e => {
        body.style.setProperty('--x', e.clientX + 'px');
        body.style.setProperty('--y', e.clientY + 'px');
    });

    // --- Animaciones al Hacer Scroll ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(elem => {
        revealObserver.observe(elem);
    });
});