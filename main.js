// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Cart Logic (Front-end only)
let cartCount = 0;
const cartCountBadge = document.querySelector('.cart-count');
const addToCartBtns = document.querySelectorAll('.add-to-cart');

addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartCountBadge.textContent = cartCount;

        // Simple animation
        btn.textContent = 'Added!';
        btn.style.backgroundColor = '#4caf50';
        btn.style.color = 'white';

        setTimeout(() => {
            btn.textContent = 'Add to Cart';
            btn.style.backgroundColor = 'white';
            btn.style.color = '#4a148c';
        }, 1500);
    });
});

// Sticky Header
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = 'none';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Simple Reveal Animation
const revealElements = document.querySelectorAll('.section');
const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for reveal
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Run once on load

// Testimonial Slider Logic
const testimonialItems = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(index) {
    if (!testimonialItems.length) return;
    testimonialItems.forEach(item => item.classList.remove('active'));

    // Wrap around logic
    if (index >= testimonialItems.length) currentSlide = 0;
    else if (index < 0) currentSlide = testimonialItems.length - 1;
    else currentSlide = index;

    testimonialItems[currentSlide].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    // Auto slide every 5 seconds
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);
}
