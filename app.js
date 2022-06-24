window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let social = document.querySelector('.social')
    let svgPosition = window.scrollY > 40;
    let navPosition = window.scrollY > 800;

    header.classList.toggle('scrolling-active', navPosition);
    social.classList.toggle('svg-active', svgPosition);
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

