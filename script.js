document.addEventListener('DOMContentLoaded', function() {
    
    const siteHeader = document.getElementById('siteHeader');
    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }


    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Simulate form submission for demo
                event.preventDefault(); 
                const successMessage = document.getElementById('success-message');
                if(successMessage) {
                    successMessage.classList.remove('d-none');
                }
                contactForm.reset();
                contactForm.classList.remove('was-validated'); 
                setTimeout(() => {
                    if(successMessage) {
                        successMessage.classList.add('d-none');
                    }
                }, 5000);
            }
            contactForm.classList.add('was-validated');
        }, false);
    }
    

    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

   
    document.querySelectorAll('a.nav-link[href^="#"], .hero-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (href.length > 1 && targetElement) {
                e.preventDefault();
                
                
                const headerOffset = siteHeader ? siteHeader.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse && navbarToggler.offsetParent !== null) { 
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        });
    });

    
    const testimonialCarouselElement = document.getElementById('testimonialCarousel');
    if (testimonialCarouselElement) {
        
    } else {
       
    }

});
