document.addEventListener('DOMContentLoaded', () => {
    alert('Benvenuto nel mio curriculum!');

    // Funzione per lo scorrimento fluido alle sezioni
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previene il comportamento predefinito del link
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Scorrimento fluido
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Aggiungi animazione alle sezioni quando vengono visualizzate
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});