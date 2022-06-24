window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let social = document.querySelector('.social')

    let navPosition = window.scrollY > 800;
        let navContactPosition = window.scrollY > 4700;



    let svgPosition = window.scrollY > 40;
    let svgContactPosition = window.scrollY > 3900;




    header.classList.toggle('scrolling-active', navPosition);
    header.classList.toggle('contact-active', navContactPosition)
    social.classList.toggle('svg-active', svgPosition);
    social.classList.toggle('contact-svg', svgContactPosition)

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

