// Inicializar animações AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Inicializar ícones do Lucide
lucide.createIcons();

// Efeito de scroll na Navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(11, 15, 26, 0.95)';
        nav.style.padding = '15px 0';
    } else {
        nav.style.background = 'transparent';
        nav.style.padding = '20px 0';
    }
});

// Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
