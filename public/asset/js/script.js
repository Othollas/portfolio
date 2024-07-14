
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");

/* script pour le bouton hamburger */

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

// condition pour definir la taille du slide selon la taille de l'ecran
if (tailleEcran == undefined){
    if(window.innerWidth < 800){
        tailleEcran = window.innerWidth;
    }else{
        tailleEcran = 800;
    }
}

const verifPositionImg = () => {
    let currentIndex = Math.floor(slide.scrollLeft / tailleEcran);
    slide.scrollLeft = currentIndex * tailleEcran;
};


window.addEventListener("resize", () => {
    if (window.innerWidth < 800) {
        tailleEcran = window.innerWidth;
        return tailleEcran
    }else{
        tailleEcran = 800;
    }
})

gauche.addEventListener('click', () => {
    slide.scrollLeft += tailleEcran;
    console.log(slide.clientWidth)
    
})

droite.addEventListener('click', () => {
    slide.scrollLeft -= tailleEcran;
    console.log((slide.scrollWidth - slide.clientWidth))
})

console.log(slide)


window.addEventListener("resize", ()=>{
    verifPositionImg();
})

console.log(slide.currentIndex)
/* script pour le fun  */

// let gauche = document.querySelector(".gauche");
// let droite = document.querySelector(".droite");
// let slide = document.querySelector(".contenu_carroussel");
// let tailleEcran = 800;

// const updateScrollPosition = () => {
//     let currentIndex = Math.floor(slide.scrollLeft / tailleEcran);
//     slide.scrollLeft = currentIndex * tailleEcran;
// };

// const checkLoop = () => {
//     const maxScrollLeft = slide.scrollWidth - slide.clientWidth;
//     if (slide.scrollLeft >= maxScrollLeft) {
//         slide.scrollLeft = 0;
//     } else if (slide.scrollLeft <= 0) {
//         slide.scrollLeft = maxScrollLeft;
//     }
// };

// window.addEventListener("resize", () => {
//     if (window.innerWidth < 800) {
//         tailleEcran = window.innerWidth;
//     } else {
//         tailleEcran = 800;
//     }
//     updateScrollPosition();
// });

// gauche.addEventListener('click', () => {
//     slide.scrollLeft -= tailleEcran;
//     if (slide.scrollLeft < 0) {
//         slide.scrollLeft = slide.scrollWidth - slide.clientWidth;
//     }
//     checkLoop();
// });

// droite.addEventListener('click', () => {
//     slide.scrollLeft += tailleEcran;
//     if (slide.scrollLeft >= slide.scrollWidth - slide.clientWidth) {
//         slide.scrollLeft = 0;
//     }
//     checkLoop();
// });

// window.addEventListener("resize", () => {
//     updateScrollPosition();
// });
