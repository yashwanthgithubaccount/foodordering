const menu = document.querySelector('.menu');
const targets = document.querySelectorAll('.target');
// const icons = document.querySelectorAll('.section-1-icons i');
let i = 1; //counter variable

menu.addEventListener('click', () => {
    targets.forEach((target) => {
        target.classList.toggle('change');
    });
});

