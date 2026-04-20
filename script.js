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

        // Review Generator
        const reviews = [
            { title: "Small Business Owner", text: "JCD Associates helped me save over $5,000 on my business taxes this year. Their attention to detail and proactive approach made all the difference. Highly recommend!", strong: "Outstanding service and results!" },
            { title: "Real Estate Investor", text: "I've been working with JCD for 3 years now. They handle all my complex tax situations with ease and always find ways to maximize my deductions. Professional and trustworthy.", strong: "Reliable and knowledgeable team." },
            { title: "Startup Founder", text: "As a new business owner, I was overwhelmed with tax requirements. JCD guided me through every step and helped structure my business for optimal tax benefits. Worth every penny!", strong: "Invaluable guidance for entrepreneurs." },
            { title: "Family Business Owner", text: "JCD has been our family's CPA for over a decade. Their year-round support and strategic planning have helped grow our business significantly. Can't imagine working with anyone else.", strong: "Long-term trusted advisors." }
        ];

        let currentReviewIndex = 0;
        const generateBtn = document.getElementById('generate-review-btn');
        const reviewTitle = document.getElementById('review-title');
        const reviewText = document.getElementById('review-text');
        const reviewStrong = document.getElementById('review-strong');

        generateBtn.addEventListener('click', () => {
            currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
            const review = reviews[currentReviewIndex];
            reviewTitle.textContent = review.title;
            reviewText.textContent = review.text;
            reviewStrong.innerHTML = `<strong>${review.strong}</strong>`;
        });
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

    // Contact Page: Form handling
    if (body.classList.contains('contact-page')) {
        const contactForm = document.getElementById('contactForm');
        const formMessage = document.getElementById('formMessage');

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!firstName || !lastName || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in a real app, this would send to a server)
            showFormMessage('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');

            // Reset form
            contactForm.reset();
        });

        function showFormMessage(message, type) {
            formMessage.textContent = message;
            formMessage.className = type;
            formMessage.style.display = 'block';

            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
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