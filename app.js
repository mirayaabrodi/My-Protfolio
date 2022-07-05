window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let social = document.querySelector('.social')

    let navPosition = window.scrollY > 750;
    let svgPosition = window.scrollY > 40;
    header.classList.toggle('scrolling-active', navPosition);
    social.classList.toggle('svg-active', svgPosition);


    let navContactPosition = window.scrollY > 6500;
    let svgContactPosition = window.scrollY > 5700;
    header.classList.toggle('contact-active', navContactPosition)
    social.classList.toggle('contact-svg', svgContactPosition)

    let mobileNav = window.scrollY > 580;
    header.classList.toggle('six-mobile-width', mobileNav);
})

// Submit contact button

const SUBMIT = document.querySelector('#submit');

const submitForm = (e) => {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');
        setTimeout(() => {
            e.target.classList.remove('active');
            e.target.classList.add('done');
            e.target.innerHTML = 'Done'
        }, 2000);
    }
}

SUBMIT.addEventListener('click', submitForm);



// Hamburger menu

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}