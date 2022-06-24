window.addEventListener('scroll', function () {

    let header = document.querySelector('header');

    let social = document.querySelector('.social')

    let windowsPosition = window.scrollY > 40;

    let windowPosition = window.scrollY > 800;

    header.classList.toggle('scrolling-active', windowPosition);

    social.classList.toggle('svg-active', windowsPosition);
})

