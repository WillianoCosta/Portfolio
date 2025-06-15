document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const contactForm = document.getElementById('contact-form');

    // Adiciona sombra ao cabeçalho no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(30, 30, 30, 0.8)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.backgroundColor = 'var(--card-bg-color)';
            header.style.backdropFilter = 'none';
        }
    });

    // Manipulação do formulário de contato
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        if (name && email && message) {
            alert('Obrigado pelo seu contato! Responderei em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Efeito de revelação suave nas seções
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
});
