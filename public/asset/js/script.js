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
let groups = document.querySelectorAll(".group");
let logo = document.querySelectorAll(".logo");
let carroussel = document.querySelector(".contenu_carroussel")
let form = document.querySelector(".container-input")
let navigation = document.querySelector(".navigation");

// observer pour l'animation de la section téléchargement

const observerTelechargement = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "scale(1)", opacity: 0 },
                { transform: "scale(1.3)", opacity: 0.7 },
                { transform: "scale(1)", opacity: 1 },
            ], { duration: 1500 })
        }
    }
})

// observer pour l'animation des logos frontend backend et innovation

const observerLogos = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "translateX(50px)", opacity: 0.1 },
                { transform: "translateX(0px)", opacity: 1 },
            ], { duration: 1500 })
        }
    }
}, { threshold: 0.5 })

// observer pour l'animation des logos des technologies utilisé

const observerLogo = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "translateX(0px)", opacity: 0 },
                { transform: "translateX(0px)", opacity: 1 },
            ], { duration: 1500 })
        }
    }
}, { threshold: 1 })

// observer pour l'animation du slide

const observerCarroussel = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                { transform: "translate(0px)", opacity: 0.5 },

                { transform: "translate(0px)", opacity: 1 },
            ], { duration: 2000 })
        }
    }
}, { threshold: 0.5 })



// observer pour faire bouger les fleches du slider

const observerNavigation = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            let childs = entry.target.children;
            for (const child of childs) {
                let fleche = child.classList.value;
                if (fleche === "droite") {
                    child.animate([
                        { transform: "translate(-50px) scale(1)", opacity: 0 },
                        { transform: "translate(0)", opacity: 1 },
                    ], { duration: 1000 })
                } else {
                    child.animate([
                        { transform: "translate(50px) scale(1)", opacity: 0 },
                        { transform: "translate(0)", opacity: 1 },
                    ], { duration: 1000 })
                }
            }
        }
    }
})

observerNavigation.observe(navigation)
observerTelechargement.observe(telechargement);
observerCarroussel.observe(carroussel);



for (let i = 0; i < groups.length; i++) {
    observerLogos.observe(groups[i]);
}

for (let i = 0; i < logo.length; i++) {
    observerLogo.observe(logo[i]);
}

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