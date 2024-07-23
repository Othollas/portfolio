/* script pour le bouton hamburger */

let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav");
let bar = document.querySelector(".bar");
let link = document.querySelector(".link");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
    bar.classList.toggle("active");
    hamburger.classList.toggle("active");
})


let lastScroll = window.scrollY;
let hideHeader = document.querySelector("header");
let thresholdUp = 200;
let thresholdDown = 100;
let totalScroll = 0;

window.addEventListener("scroll", ()=>{
    const currentScroll = window.scrollY;
    const deltaScroll = currentScroll - lastScroll;
    totalScroll += deltaScroll;
        
    if (totalScroll > thresholdUp) {
        hideHeader.style.display = 'none';  // Cache le header
        totalScroll = thresholdUp;  // Limite le totalScroll à la valeur du threshold
    } else if (totalScroll < -thresholdDown) {
        hideHeader.style.display = 'block'; // Affiche le header
        totalScroll = -thresholdDown;  // Limite le totalScroll à la valeur du threshold négatif
    }

    lastScroll = currentScroll;
    
    
});

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
                { transform: "translateX(50px)", opacity: 1 },
                { transform: "translateX(0px)", opacity: 1 },
            ], { duration: 1000 })
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

const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");


droite.addEventListener('click', () => {
    const tailleSlide = document.querySelector(".carroussel").offsetWidth;
    const contenuSlide = document.querySelector(".contenu_carroussel");
    contenuSlide.scrollLeft += tailleSlide;
    const scrollLeft = contenuSlide.scrollLeft;
    const elementsSlide = contenuSlide.querySelectorAll(".contenu_img");
    

    if(scrollLeft == tailleSlide * (elementsSlide.length-1)){
        contenuSlide.scrollLeft = 0;
    }
    
        console.log(elementsSlide[1].offsetWidth)
        
    
        
})


gauche.addEventListener('click' || 'onTouch', () => {
    const tailleSlide = document.querySelector(".carroussel").offsetWidth;
    const contenuSlide = document.querySelector(".contenu_carroussel");
    contenuSlide.scrollLeft -= tailleSlide;
    const scrollLeft = contenuSlide.scrollLeft;
    const elementsSlide = contenuSlide.querySelectorAll(".contenu_img");
    
    if(scrollLeft == 0){
        contenuSlide.scrollLeft = tailleSlide * (elementsSlide.length-1);
    }

    console.log(Math.floor(contenuSlide.scrollLeft / tailleSlide))

})

// const verifPositionImg = () => {
//     let currentIndex = Math.floor(contenuSlide.scrollLeft / tailleSlide);
//     contenuSlide.scrollLeft = currentIndex * tailleSlide;
// };

// const adapterTailleEcran = () => {
//     contenuSlide = window.innerWidth < 800 ? tailleSlide : 800;  
//     verifPositionImg();
// }

// window.addEventListener("resize", adapterTailleEcran)