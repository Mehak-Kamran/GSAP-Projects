var main=document.querySelector("#main");
var cursor=document.querySelector("#cursor");
var imagediv= document.querySelector("#image");
var overlay=document.querySelector("#overlay");

main.addEventListener("mousemove",(dets)=>{
        gsap.to(cursor,{
            x:dets.x,
            y:dets.y,
            duration:1,
            ease:"back.out"
        })
})

overlay.addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:2,
        
    })

})

overlay.addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:1,
        
    })

})

