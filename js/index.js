const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces__menu');
const barras = document.querySelectorAll('.ham span');
const logo = document.querySelector('.logo');

ham.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    logo.classList.toggle('fuera');
});