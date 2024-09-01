let menu=document.querySelector("#nav i");
let close=document.querySelector("#full i");


let tl=gsap.timeline()

tl.to("#full",{
    left:790,
    duration:1
})

tl.from("#full h2,hr",{
    x:900,
    duration:0.7,
    stagger:0.29,
    opacity:0
})

tl.from("#full i",{
    
    opacity:0
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play()
})

close.addEventListener("click",()=>{
    tl.reverse()
})
