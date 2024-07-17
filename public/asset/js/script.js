/* script pour le bouton hamburger */

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    bar.classList.toggle("active");
    hamburger.classList.toggle("active");
})

// script pour mettre le header en position fixe lors du scroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList = "scroll";
    } else {
        header.classList.remove("scroll");
    }
})

// parametrage de l'api observer afin d'animer les elements au scroll



let telechargement = document.querySelector(".telechargement");
let logos = document.querySelectorAll(".logo");
let carroussel = document.querySelector(".contenu_carroussel")
let form = document.querySelector(".container-input")

// const option = {
//     root: document.querySelector("html"),
//     rootMargin: "0px",
//     threshold: 1.0,
// }

const observerTelechargement = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "scale(1) rotate(0deg)", opacity: 0 },
                { transform: "scale(1.5) rotate(-180deg)", opacity: 1 },
                { transform: "scale(1) rotate(-360deg)", opacity: 1 }

            ], { duration: 2000 })
        }
    }
})

const observerlogos = new IntersectionObserver((entries) => {

})


const observerCarroussel = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "translateX(-100px)", opacity: 0 },
                { transform: "translateX(0px)", opacity: 1 },
            ], {duration: 1000})
        }
    }
})


const observerForm = new IntersectionObserver((entries) => {

})

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting && entry.target.classList.value == "telechargement") {
            entry.target.animate([
                { transform: 'scale(1)', opacity: 0 },
                { transform: 'scale(1.5)', opacity: 1 },
                { transform: 'scale(1)', opacity: 1 }
            ],
                { duration: 1000 }
            )
            entry.target.classList("flecheGauche").animate([
                { transform: 'scale(1)', opacity: 0 },
                { transform: 'scale(1.5)', opacity: 1 },
                { transform: 'scale(1)', opacity: 1 }
            ],
                { duration: 1000 }
            )
        }
        if (entry.isIntersecting && entry.target.classList.value == "container-input") {
            entry.target.animate([
                { transform: 'translateY(-20px)', opacity: 0 },
                { transform: 'translateY(0px)', opacity: 1 },

            ],
                { duration: 1000 }
            )
            c
        }
    }
},
    {
        threshold: 1
    })

// observer.observe(presentation);
observer.observe(document.querySelector(".container-input"));
observerTelechargement.observe(telechargement);
observerCarroussel.observe(carroussel);


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

const adapterTailleEcran = () => {
    tailleEcran = window.innerWidth < 800 ? window.innerWidth : 800;
    verifPositionImg();
}

// ternaire pour definir la taille du slide selon la taille de l'ecran
window.innerWidth < 800 ? tailleEcran = window.innerWidth : tailleEcran = 800;

window.addEventListener("resize", adapterTailleEcran)

droite.addEventListener('click', () => {
    slide.scrollLeft += tailleEcran;
    if (slide.scrollLeft >= finSlide()) {
        slide.scrollLeft = 0;
    }
})

gauche.addEventListener('click' || 'onTouch', () => {

    slide.scrollLeft -= tailleEcran;
    if (slide.scrollLeft <= 0) {
        slide.scrollLeft = finSlide();
    }
})