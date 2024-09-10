var h1=document.querySelector("h1")
console.log(h1)// whole tag is accessesd
var text=h1.textContent
console.log(text)
//split text
var splittext=text.split("")
console.log(splittext)
//assign each alphabet a span
clutter=""
splittext.forEach(function(e){
    console.log(e)
   clutter += `<span>${e} </span>`
}
 
)
h1.innerHTML=clutter
console.log(clutter)
//gsap
gsap.from("h1 span",{
    y:50,
    duration:0.8,
    opacity:0,
    delay:0.5,
    stagger:0.15

})