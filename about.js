document.addEventListener('DOMContentLoaded', () => {


    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    const menuOverlay = document.getElementById('menuOverlay');

    if (burgerBtn && navMenu && menuOverlay) {
        const toggleMenu = () => {
            burgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        };

        burgerBtn.addEventListener('click', toggleMenu);
        menuOverlay.addEventListener('click', toggleMenu);

        const navLinks = document.querySelectorAll('.nav .link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
                menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

});
