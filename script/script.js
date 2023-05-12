/***************HEADER****************/
gsap.registerPlugin(ScrollTrigger);
//gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(MotionPathPlugin);
gsap.to(".inviterScroll img", {
    y: "10%",
    repeat: -1,
    duration: 2,
    yoyo: true
});
gsap.to(".inviterScroll p", {
    opacity: "75%",
    repeat: -1,
    duration: 2,
    yoyo: true
});

/****************CHAPITRE 1  TERRE*******************/
//Animation de l'avion de gauche a droite (scrollTriger avec scrub)


//.to(".nuage",{y:"-1000px",duration:2})

gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#terre",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to(".nuage.n6",{y:"-15vh"},0)
.to(".nuage.n1",{y:"-10vh"},0)
.to(".nuage.n2",{y:"-10vh"},0)
.to(".nuage.n5",{y:"-10vh"},0)
.to("#avion",{y:"-10vh"},0)
.to(".nuage.n3",{y:"-5vh"},0)
.to(".nuage.n4",{y:"-5vh"},0)

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


/***************CHAPITRE 2 TERRE ESPACE*****************/

//parallax
gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#terreEspace",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to("#terreEspace",{backgroundPositionY:"-5vh"},0)
.to("#planeteTerre",{y:"-10vh"},0)
.to("#fusee",{y:"-15vh"},0)
.to("#petiteOurse",{y:"-5vh"},0)


//ANIMATION DE LA PETITE OURSE QUI APPARET
gsap.fromTo("#petiteOursePath",{
    drawSVG:"0%",
},{
    scrollTrigger:{
        markers: true,
        trigger: "#terreEspace",
        start: "40% 50%",
        end: "bottom 50%",
        toggleActions:"restart complete reverse reset",
    },
    drawSVG:"100%",
    duration:1,
    ease:"power1.inOut",
})

//Animation de la fusée qui fait le tour de la planète terre
gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: "#terreEspace",
            start: "20% 50%",
            end: "80% top",
           scrub:2,
        }
    })
    .to("#fusee", {
        y: "30vh",
        duration: 5
    })
    .to("#fusee", {
        rotation: "250deg",
        duration: 2.5
    }, "-=5")
    .to("#fusee", {
        x: "75vw",
        duration: 3
    }, "-=5")
    .to("#fusee", {
        zIndex: 2
    }, "-=3S")
    .to("#fusee", {
        x: "-90vw",
        duration: 3
    }, "-=3")




/******************CHAPITRE 3 ESPACE PLANETES****************/
//Parallax
gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#espacePlanetes",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to("#espacePlanetes",{backgroundPositionY:"-5vh"},0)
.to(".vache",{y:"-15vh"},0)
.to(".planete.rose",{y:"-15vh"},0)
.to(".planete.bleu",{y:"-15vh"},0)
.to(".planete.blanche",{y:"-15vh"},0)
.to(".spritesheetPlanete.bleuMauve",{y:"-10vh"},0)
.to(".spritesheetPlanete.turquoise",{y:"-10vh"},0)
.to(".planete.bleuVert",{y:"-10vh"},0)


//Animation des planetes qui rotation sur elles mêmes
gsap.to(".planete", {
    rotation: "360deg",
    ease: "none",
    repeat: -1,
    duration: 50,
})
//vache qui vole
gsap.to(".vache", {
    scrollTrigger: {
           markers: true,
        trigger: "#espacePlanetes",
        start: "10% 50%",
        end: "60% top",
        scrub: 1,
    },
    rotation: "360deg",
    x: "-20vw"
});
//ANIMATION DE LES SPRITESHEET
let body = document.querySelector("body");
let timer = setTimeout(enleverClass,100);

function enleverClass(){
body.classList.remove("scrolling")
}

window.addEventListener("scroll",function(){
    body.classList.add("scrolling");
    window.clearTimeout(timer);
    timer = setTimeout(enleverClass,100);
})



/*************CHAPITRE 4 ESPACE BALEINE*************/
//parallax
gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#espaceBaleines",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to(".baleine.n3",{y:"-15vh"},0)
.to(".baleine.n5",{y:"-15vh"},0)
.to(".baleine.n6",{y:"-15vh"},0)
.to(".baleine.n1",{y:"-10vh"},0)
.to(".baleine.n2",{y:"-10vh"},0)
.to(".baleine.n4",{y:"-10vh"},0)
.to(".baleine.n7",{y:"-10vh"},0)
.to(".baleine.n8",{y:"-10vh"},0)
.to("#espaceBaleines",{backgroundPositionY:"-5vh"})


// Animation de baleines
gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: "#espaceBaleines",
            start: "top 50%",
            end: "60% top",
            scrub:1,
        }
    })
    .fromTo(".baleine", {
        x: "80vw"
    }, {
        x: "-100vw",
        duration: 20,
        ease: "none"
    })

/***************CHAPITRE 5 TROUE NOIR******************/
gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#trouNoir",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to(".meteorite.n1",{y:"-15vh"},0)
.to(".meteorite.n3",{y:"-15vh"},0)
.to(".meteorite.n2",{y:"-10vh"},0)
.to(".meteorite.n4",{y:"-10vh"},0)
.to(".meteorite.n5",{y:"-10vh"},0)


//Animation des météorites

gsap.timeline({
        scrollTrigger: {
            markers: true,
            trigger: "#trouNoir",
            start: " 50%",
            end: "60% top",
        }
    })
    .fromTo(".meteorite", {
        x: "-100vw"
    }, {
        x: "80vw",
        duration: 4,
        ease: "none",
        repeat:-1,
        stagger: {
            each: 0.5,
            from: "random",
        }
    })
    .to(".meteorite", {
        rotation: "306deg",
        duration: 5,
        ease: "none",
        repeat:-1,
        stagger: {
            each: 0.2,
            from: "random",
        }
    },0)


/****************CHAPITRE 6**************/
//parallax
gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#espacePlaneteMorte",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to(".planeteCasser.n2",{y:"-15vh"},0)
.to(".planeteCasser.n1",{y:"-10vh"},0)
.to("#espacePlaneteMorte",{backgroundPositionY:"-5vh"},0)

//Animation des planetes détruites
gsap.to(".planeteCasser", {
    rotation: "360deg",
    duration: 200,
    repeat: -1,
})

/****************CHAPITRE 7*************/

gsap.timeline({
    scrollTrigger:{
        markers: true,
            trigger: "#espaceCuthulu",
            start: "top 50%",
            end: "bottom top",
            scrub:true,
    }
})
.to("#cuthuluYeux",{y:"-15vh"},0)
.to("#cuthuluCorp",{y:"-15vh"},0)
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
            toggleActions:"restart complete reverse reset",
        }
    })
    .fromTo("#cuthuluYeux", {
        opacity: "0%"
    }, {
        opacity: "100%",
        duration: 5
    })
    .fromTo("#cuthuluYeux", {
        opacity: "100%"
    }, {
        opacity: "0%",
        duration: 3
    })
    .fromTo("#cuthuluCorp", {
        opacity: "0%"
    }, {
        opacity: "100%",
        duration: 10
    })