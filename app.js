window.addEventListener('scroll', function () {

    let header = document.querySelector('header');

    let social = document.querySelector('.social')

    let windowsPosition = window.scrollY > 40;

    let windowPosition = window.scrollY > 800;

    header.classList.toggle('scrolling-active', windowPosition);

    social.classList.toggle('svg-active', windowsPosition);
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