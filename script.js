// Add your JavaScript code here, for example, smooth scrolling

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
