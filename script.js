// Add staggered animations to service boxes
document.addEventListener('DOMContentLoaded', function() {
    const serviceBoxes = document.querySelectorAll('.service-box');

    serviceBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
    });

    // Add a silly click effect to service links
    const serviceLinks = document.querySelectorAll('.service-link');

    serviceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const box = this.querySelector('.service-box');
            box.style.animation = 'bounceIn 0.5s ease-out';

            // Navigate after animation
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });

    // Make the company name wiggle on click
    const companyName = document.querySelector('.company-name');
    if (companyName) {
        companyName.addEventListener('click', function() {
            this.style.animation = 'wiggle 1s ease-in-out';
        });
    }

    // Page-specific cool effects
    const body = document.body;
    if (body.classList.contains('tax-page')) {
        // Tax page: Animate tax-cta and tax-stat on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideInLeft 1s ease-out';
                }
            });
        });
        document.querySelectorAll('.tax-cta, .tax-stat').forEach(el => observer.observe(el));
    } else if (body.classList.contains('book-page')) {
        // Book page: Hover effect on feature-cards
        document.querySelectorAll('.feature-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05) rotate(1deg)';
                card.style.transition = 'transform 0.3s ease';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    } else if (body.classList.contains('fin-page')) {
        // Fin page: Timeline items slide in sequentially
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            setTimeout(() => {
                item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }

    // Global scroll effect: Fade in elements with class 'fade-in'
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
});