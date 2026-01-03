
    const brandMain = document.getElementById('brandMain');
    const brandSub = document.getElementById('brandSub');
    const logoContainer = document.getElementById('logoText');
    
    let isEnglish = true;

    setInterval(() => {
        // 1. Start Fade Out
        logoContainer.classList.add('fade-out');

        // 2. Wait 500ms (matches CSS transition), then swap text
        setTimeout(() => {
            if (isEnglish) {
                // Switch to Tamil
                brandMain.innerText = "அத்தியாயம்";
                brandSub.innerText = "அறக்கட்டளை";
                // Optional: Adjust font size if Tamil text is too big/small
                brandMain.style.fontSize = "1.4rem"; 
            } else {
                // Switch to English
                brandMain.innerText = "ATHIYAYAM";
                brandSub.innerText = "TRUST";
                brandMain.style.fontSize = ""; // Reset to default CSS
            }
            
            // Toggle state
            isEnglish = !isEnglish;

            // 3. Fade In
            logoContainer.classList.remove('fade-out');
        }, 500);

    }, 3500); // Runs every 3.5 seconds (3s wait + 0.5s animation)



    // Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Switch Icon between Bars and X
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});



// --- SCROLL TO TOP LOGIC ---
const scrollBtn = document.getElementById('scrollUp');

window.addEventListener('scroll', () => {
    // Show button if scrolled down more than 300px
    if (window.scrollY > 300) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
    }
});

// Smooth Scroll to Top on Click
scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});