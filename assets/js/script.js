
    const navToggle = document.querySelector('.hamburger-menu button');
    const navLinks = document.querySelector('.nav-link');

    function openNavbar() {
        navLinks.classList.toggle('active');
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle) {
            navLinks.classList.remove('active');
        }
    });




    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });
    