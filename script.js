document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scroll Effect
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

    // Bootstrap Form Validation (Native BS5 validation)
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
                // Remove 'was-validated' to reset styles after successful "submission"
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
    
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Active Nav Link highlighting on Scroll (using Bootstrap's ScrollSpy)
    // Bootstrap's ScrollSpy (data-bs-spy="scroll" data-bs-target="#mainNavbar" data-bs-offset="100" in body tag)
    // handles this automatically. The CSS for .nav-link.active will apply.
    // We just need to ensure smooth scroll and mobile nav closure.

    // Smooth scroll for internal links & close mobile nav
    document.querySelectorAll('a.nav-link[href^="#"], .hero-section a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetElement = document.querySelector(href);

            if (href.length > 1 && targetElement) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerOffset = siteHeader ? siteHeader.offsetHeight : 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile navbar if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse.show');
                if (navbarCollapse && navbarToggler.offsetParent !== null) { // Check if toggler is visible
                    new bootstrap.Collapse(navbarCollapse).hide();
                }
            }
        });
    });

    // Initialize Testimonial Carousel (Bootstrap 5 does this automatically with data-bs-ride)
    // If you encounter issues, you can manually initialize:
    const testimonialCarouselElement = document.getElementById('testimonialCarousel');
    if (testimonialCarouselElement) {
        // const testimonialCarousel = new bootstrap.Carousel(testimonialCarouselElement, {
        //  interval: 7000, // Adjust interval if needed
        //  wrap: true
        // });
        // console.log("Testimonial carousel initialized (or auto-initialized by Bootstrap)");
    } else {
        // console.log("Testimonial carousel element not found.");
    }

});