
/***************HEADER****************/
gsap.registerPlugin(ScrollTrigger);

gsap.to(".inviterScroll img", {
    y: "10%", repeat: -1, duration: 2, yoyo: true
});
gsap.to(".inviterScroll p", {
    opacity: "75%", repeat: -1, duration: 2, yoyo: true
});

/****************CHAPITRE 1*******************/
//Animation de l'avion de gauche a droite (scrollTriger avec scrub)


gsap.timeline({
    scrollTrigger:{
        markers: true,
        trigger: "#terre",
        start: "50% 50%",
        end: "60% top",
        scrub: 1, 
    }
})
.to("nuage",{y:"500px"})

gsap.to("#avion", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,

    },
    x: "180vw",
    duration: 5,
});

gsap.to(".nuage.n1", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: true,
    },
    x: "10vw",
});
gsap.to(".nuage.n2", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    x: "10vw",
});

gsap.to(".nuage.n3", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    x: "10vw",
});

gsap.to(".nuage.n4", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    x: "10vw",
});

gsap.to(".nuage.n5", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    x: "10vw",
});
gsap.to(".nuage.n6", {
    scrollTrigger: {
        markers: true,
        trigger: "#terre",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    x: "10vw",
});


/***************CHAPITRE 2*****************/
//Animation de la fusée qui fait le tour de la planète terre
gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "#terreEspace",
        start: "20% 50%",
        end: "60% top",
        toggleActions: "restart none none restart"
    }
})
    .to("#fusee", { y: "30vh", duration: 5 })
    .to("#fusee", { rotation: "250deg", duration: 2.5 }, "-=5")
    .to("#fusee", { x: "75vw", duration: 3 }, "-=5")
    .to("#fusee", { zIndex: 2 }, "-=3S")
    .to("#fusee", { x: "-90vw", duration: 3 }, "-=3")




/******************CHAPITRE 3 ****************/
//Animation des planetes qui rotation sur elles mêmes
gsap.to(".planete", {
    rotation: "360deg",
    ease: "none",
    repeat: -1,
    duration: 50,
})

gsap.to(".vache", {
    scrollTrigger: {
        markers: true,
        trigger: "#espacePlanetes",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    rotation:"360deg",x:"-20vw"
});

/*************CHAPITRE 4*************/
// Animation de baleines
gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "#espaceBaleines",
        start: "20% 50%",
        end: "60% top",
        toggleActions: "restart none none restart"
    }
})
    .fromTo(".baleine", { x: "80vw" }, { x: "-100vw", duration: 20, ease: "none" })
    .to(".baleine", {
        y: "2vh", duration: 1, repeat: -1, yoyo: true, ease: "power1.inOut", stagger: {
            each: 0.2,
            from: "random",
        }
    }, "-=20")

/***************CHAPITRE 5******************/
//Animation des météorites

gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "#trouNoir",
        start: "20% 50%",
        end: "60% top",
    }
})
    .fromTo(".meteorite", { x: "-100vw" }, {
        x: "80vw", duration: 4, repeat: -1, ease: "none", stagger: {
            each: 0.5,
            from: "random",
        }
    })
    .to(".meteorite", {
        rotation: "306deg", duration: 5, repeat: -1, ease: "none", stagger: {
            each: 0.2,
            from: "random",
        }
    }, "-=5")


/****************CHAPITRE 6**************/
//Animation des planetes détruites
gsap.to(".planeteCasser", {
    rotation: "360deg", duration: 200, repeat: -1,
})


/****************CHAPITRE 7*************/
//Animation Cuthulu
gsap.to("#cuthuluYeux", {
    opacity: 0,
    duration: 0.1,
})
gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "#espaceCuthulu",
        start: "20% 50%",
        end: "60% top",
    }
})
    .fromTo("#cuthuluYeux", { opacity: "0%" }, { opacity: "100%", duration: 5 })
    .fromTo("#cuthuluYeux", { opacity: "100%" }, { opacity: "0%", duration: 3 })
    .fromTo("#cuthuluCorp", { opacity: "0%" }, { opacity: "100%", duration: 10 })
