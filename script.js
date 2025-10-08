// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Vérifie si l'utilisateur a déjà choisi le dark mode
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Animation au scroll pour les sections
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');

    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition > sectionTop + sectionHeight * 0.2) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
};

// Initialisation des animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    // Réinitialiser les styles pour l'animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Déclencher l'animation au scroll
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Vérifier au chargement

    // Animation pour le bouton de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre message! Je vous contacterai bientôt.');
            contactForm.reset();
        });
    }

    // Animation pour les cartes de compétences
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Animation pour le bouton dark mode au scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        darkModeToggle.style.transform = 'scale(0.9)';
    } else {
        darkModeToggle.style.transform = 'scale(1)';
    }
});
