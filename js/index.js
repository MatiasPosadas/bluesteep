const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces__menu');
const barras = document.querySelectorAll('.ham span');
const logo = document.querySelector('.logo');
const nav = document.querySelector('.nav');


ham.addEventListener('click', ()=> {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    logo.classList.toggle('fuera');
});

/*Nav background scroll*/

window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY>100);
})




