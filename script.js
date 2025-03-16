// Dynamic Background Color Change
const body = document.body;
const colors = ["#1a1a1a", "#333", "#007BFF", "#00FF88", "#FF5733", "#F333FF"];
let currentColorIndex = 0;

function changeBackgroundColor() {
    body.style.background = `linear-gradient(135deg, ${colors[currentColorIndex]}, ${colors[(currentColorIndex + 1) % colors.length]})`;
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

setInterval(changeBackgroundColor, 5000); // Change color every 5 seconds

// Add animated background class to body
body.classList.add("animated-bg");

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.querySelector('.contact form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    this.reset(); // Clear the form
});

// Feature Card Hover Effect
document.querySelectorAll('.feature-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    });
});
