/* script pour le bouton hamburger */

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    bar.classList.toggle("active");
    hamburger.classList.toggle("active");
})

/* script pour le carroussel */

let gauche = document.querySelector(".gauche");
let droite = document.querySelector(".droite");
let slide = document.querySelector(".contenu_carroussel");
let tailleEcran;

const verifPositionImg = () => {
    let currentIndex = Math.floor(slide.scrollLeft / tailleEcran);
    slide.scrollLeft = currentIndex * tailleEcran;
};

//fonction pour definir le maximum de la limite du slider en px selon la taille de la fenetre

const finSlide = () => {
    return slide.scrollWidth - slide.clientWidth;
};

const adapterTailleEcran = ()=>{
  tailleEcran =  window.innerWidth < 800 ? window.innerWidth : 800;
  verifPositionImg();
}

// ternaire pour definir la taille du slide selon la taille de l'ecran
window.innerWidth < 800 ? tailleEcran = window.innerWidth : tailleEcran = 800 ;

window.addEventListener("resize", adapterTailleEcran)

droite.addEventListener('click', () => {
    slide.scrollLeft += tailleEcran;
    if(slide.scrollLeft >= finSlide()){
        slide.scrollLeft = 0;
    }
})

gauche.addEventListener('click' || 'onTouch' , () => {
    
    slide.scrollLeft -= tailleEcran;
    if(slide.scrollLeft <= 0){
        slide.scrollLeft = finSlide();
    }
})

window.addEventListener("resize", ()=>{
    
})