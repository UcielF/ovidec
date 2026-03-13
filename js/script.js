(() => {

    // reveal on scroll (IntersectionObserver)
    const items = document.querySelectorAll('.reveal');

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('is-in');
                io.unobserve(e.target); // anima una sola vez
            }
        });
    }, { threshold: 0.18 });

    items.forEach(el => io.observe(el));

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    const navLinks = nav.querySelectorAll('a');

    const closeMenu = () => {
        nav.classList.remove('is-open');
        toggle.classList.remove('is-open');
    };

    toggle.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que el click “suba” y lo cierre
        toggle.classList.toggle('is-open');
        nav.classList.toggle('is-open');
    });


    navLinks.forEach(link => link.addEventListener('click', closeMenu));

    // Cerrar al tocar fuera
    document.addEventListener('click', (e) => {
        const clickedOutside = !nav.contains(e.target) && !toggle.contains(e.target);
        if (nav.classList.contains('is-open') && clickedOutside) closeMenu();
    });

    const toggleServices = document.getElementById('toggle-services');
    const badges = document.querySelector('.badges');

    toggleServices.addEventListener('click', () => {
        badges.classList.toggle('is-open');
        toggleServices.classList.toggle('is-open');
    });

    document.querySelectorAll('.split__media').forEach(media => {
        const slider = media.querySelector('.split__slider');
        const prev = media.querySelector('.split__arrow--prev');
        const next = media.querySelector('.split__arrow--next');
        if (!slider || !prev || !next) return;

        const step = () => slider.clientWidth;

        prev.addEventListener('click', () => slider.scrollBy({ left: -step(), behavior: 'smooth' }));
        next.addEventListener('click', () => slider.scrollBy({ left: step(), behavior: 'smooth' }));
    });

    document.getElementById("form-whatsapp").addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const vehiculo = document.getElementById("vehiculo").value.trim();
        const falla = document.getElementById("falla").value.trim();

        const mensaje = `Hola OVIDEC! Soy ${nombre}. Tengo un ${vehiculo} y el problema es que ${falla}. ¿Podemos coordinar turno?`;

        const url = `https://wa.me/5491153776915?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");
    });

})();