document.addEventListener('DOMContentLoaded', () => {

    // Select Elements
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu-btn'); // NEW Selection
    const sideMenu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');

    if (!menuBtn) {
        console.error("Error: Menu Button not found!");
        return;
    }

    // Toggle Function
    function toggleMenu() {
        sideMenu.classList.toggle('open');
        overlay.classList.toggle('show');
    }

    // Open Menu
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // NEW: Close Menu using Cross Button
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', toggleMenu);
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = sideMenu.contains(e.target);
        const isClickOnBtn = menuBtn.contains(e.target);

        if (sideMenu.classList.contains('open') && !isClickInside && !isClickOnBtn) {
            sideMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    });

    // Header scroll animation logic
    let lastScrollY = window.scrollY;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Only animate if the mobile menu is not open
        if (!sideMenu.classList.contains('open')) {
            // Threshold to avoid hiding right at the very top of the page
            if (currentScrollY > 100) {
                if (currentScrollY > lastScrollY) {
                    // Scrolling Down
                    header.classList.add('hide-bottom');
                } else {
                    // Scrolling Up
                    header.classList.remove('hide-bottom');
                }
            } else {
                // At the top of the page
                header.classList.remove('hide-bottom');
            }
        }

        lastScrollY = currentScrollY;
    });

    // =========================================
    // Subscribe Button Email Validation
    // =========================================
    const subBtn = document.querySelector('.d-sub-btn');
    const emailInput = document.querySelector('.d-email-input');

    if (subBtn && emailInput) {
        subBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email) {
                alert('Please enter your email address.');
                emailInput.focus();
                return;
            }

            // Basic email validation: must contain @ and a dot after @
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address (e.g. name@example.com).');
                emailInput.focus();
                return;
            }

            // Success
            alert('Thank you for subscribing! 🎉');
            emailInput.value = '';
        });
    }
    // =========================================
    // Mobile Subscribe Button Email Validation
    // =========================================
    const mobileSubBtn = document.getElementById('mobile-subscribe-btn');
    const mobileEmailInput = document.getElementById('mobile-email-input');

    if (mobileSubBtn && mobileEmailInput) {
        mobileSubBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = mobileEmailInput.value.trim();

            if (!email) {
                alert('Please enter your email address.');
                mobileEmailInput.focus();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address (e.g. name@example.com).');
                mobileEmailInput.focus();
                return;
            }

            // Success
            alert('Thank you for subscribing! 🎉');
            mobileEmailInput.value = '';
        });
    }

});