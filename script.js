// Scroll to Top Button Logic
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener('scroll', () => {
    // Show button when scrolled down 300px
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
        // Sticky Header logic
        document.getElementById("header").classList.add("sticky");
    } else {
        scrollTopBtn.style.display = "none";
        // Remove sticky header when at top
        document.getElementById("header").classList.remove("sticky");
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Mobile menu toggle (basic implementation)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    if(navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'block';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'white';
        navMenu.style.padding = '20px';
        navMenu.style.boxShadow = '0 10px 10px rgba(0,0,0,0.1)';
        
        // Flex column for ul
        const ul = navMenu.querySelector('ul');
        ul.style.flexDirection = 'column';
        ul.style.gap = '15px';
    }
});

// Password toggle functionality
const togglePassword = document.querySelectorAll('.toggle-password');
togglePassword.forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        }
    });
});
