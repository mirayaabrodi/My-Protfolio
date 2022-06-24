window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 800;
    header.classList.toggle('scrolling-active', windowPosition);
})