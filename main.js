// Main JavaScript for Loop Circuit Website

document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle navigation
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Scroll header effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                    navLinks.forEach(link => {
                        link.style.animation = '';
                    });
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section-title, .subsection h3, .result-card, .team-member');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    
    // Initialize animations on load
    animateOnScroll();
    
    // Create placeholder charts
    createPlaceholderCharts();
});

// Function to create placeholder charts
function createPlaceholderCharts() {
    // This would be replaced with actual chart creation code
    // For now, we'll just style the placeholders
    const chartPlaceholders = document.querySelectorAll('.chart-placeholder');
    
    chartPlaceholders.forEach(placeholder => {
        placeholder.style.background = 'linear-gradient(135deg, rgba(0,191,255,0.1) 0%, rgba(76,217,100,0.1) 100%)';
        placeholder.style.border = '1px solid rgba(0,191,255,0.2)';
    });
}
