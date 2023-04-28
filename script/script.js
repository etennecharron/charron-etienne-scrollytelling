gsap.registerPlugin(ScrollTrigger);

gsap.to(".inviterScroll img",{
y:"10%", repeat:-1,duration:2 ,yoyo:true
})
gsap.to(".inviterScroll p",{
    opacity:"75%",repeat:-1,duration:2,yoyo:true
})


//Animation de l'avion de gauche a droite (scrollTriger avec scrub)
gsap.to("#avion",{
    scrollTrigger:{
    markers:true,
    trigger:"#terre",
    start:"10% 50%",
    end:"60% top",
    scrub:true,
    },
x:"180vw",
duration:5,
})
//Animation des planetes qui rotation sur elles mêmes
gsap.to(".planete",{
rotation:"360deg",
ease:"none",
repeat:-1,
duration:200,
})

//Animation de la fusée qui fait le tour de la planète terre
gsap.timeline({
    scrollTrigger:{
        markers:true,
        trigger:"#terreEspace",
        start:"20% 50%",
        end:"60% top",

    }
})
.to("#fusee",{y:"30vh",duration:5})
.to("#fusee",{rotation:"250deg",duration:2.5},"-=5")
.to("#fusee",{x:"75vw",duration:3},"-=5")
.to("#fusee",{zIndex:2},"-=3S")
.to("#fusee",{x:"-90vw",duration:3},"-=3")


gsap.timeline({
    scrollTrigger:{
        markers:true,
        trigger:"#terreEspace",
        start:"20% 50%",
        end:"60% top",

    }
})
.fromTo(".baleine",{x:"100vw"},{x:"-100vw",duration:5})
