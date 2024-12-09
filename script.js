// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for any fixed headers
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.textContent = ⁠ Thank you, ${name}! Your appointment request has been received. We will contact you at ${email} soon. ⁠;
    confirmationMessage.classList.remove('hidden');
    this.reset();
});