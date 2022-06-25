window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let social = document.querySelector('.social')

    let navPosition = window.scrollY > 800;
    let svgPosition = window.scrollY > 40;


    let navContactPosition = window.scrollY > 4400;
    let svgContactPosition = window.scrollY > 3900;

    let mobilePositionContact = window.scrollY > 5550;
    let mobilePositionContactSvg = window.scrollY > 4850;




    header.classList.toggle('scrolling-active', navPosition);
    social.classList.toggle('svg-active', svgPosition);


    header.classList.toggle('contact-active', navContactPosition)
    social.classList.toggle('contact-svg', svgContactPosition)


    header.classList.toggle('mobile-contact-active', mobilePositionContact)
    social.classList.toggle('mobile-contact-svg', mobilePositionContactSvg)
})



const SUBMIT = document.querySelector('#submit');

const submitForm = (e) => {
    if (!e.target.classList.contains('active')) {
        e.target.classList.add('active');
        setTimeout(() => {
            e.target.classList.remove('active');
            e.target.classList.add('done');
            e.target.innerHTML = 'Done'
        }, 1000);
    }
}

SUBMIT.addEventListener('click', submitForm);

