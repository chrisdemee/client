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
    companyName.addEventListener('click', function() {
        this.style.animation = 'wiggle 1s ease-in-out';
    });
});