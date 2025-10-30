// Navigation Toggle
function toggleNav() {
    const mobileNav = document.getElementById('mobileNav');
    const navToggle = document.querySelector('.nav-toggle');
    
    mobileNav.classList.toggle('active');
    navToggle.classList.toggle('active');
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100; // Animation duration control
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCounter, 30);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for Counter Animation
const counterSection = document.querySelector('.counter-section');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

if (counterSection) {
    counterObserver.observe(counterSection);
}

// Services Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const navButtons = document.querySelectorAll('.slider-nav button');

function changeSlide(index) {
    // Remove active class from all slides and buttons
    slides.forEach(slide => slide.classList.remove('active'));
    navButtons.forEach(button => button.classList.remove('active'));
    
    // Add active class to current slide and button
    slides[index].classList.add('active');
    navButtons[index].classList.add('active');
    
    currentSlide = index;
}

// Auto-advance slider every 5 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    changeSlide(currentSlide);
}, 5000);

// WhatsApp Functions
function openWhatsApp() {
    const popup = document.getElementById('whatsappPopup');
    popup.classList.add('active');
}

function closeWhatsApp() {
    const popup = document.getElementById('whatsappPopup');
    popup.classList.remove('active');
}

function continueToWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=918668457181&text&type=phone_number&app_absent=0', '_blank');
    closeWhatsApp();
}

// Close WhatsApp popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('whatsappPopup');
    const floatButton = document.querySelector('.whatsapp-float');
    
    if (!popup.contains(e.target) && !floatButton.contains(e.target)) {
        popup.classList.remove('active');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        const navToggle = document.querySelector('.nav-toggle');
        mobileNav.classList.remove('active');
        navToggle.classList.remove('active');
    });
});