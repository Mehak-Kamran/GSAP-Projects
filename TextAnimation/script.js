var h1=document.querySelector("h1")
console.log(h1)// whole tag is accessesd
var text=h1.textContent
console.log(text)
//split text
var splittext=text.split("")
console.log(splittext)
//assign each alphabet a span
//additional
var len=Math.floor(text.length/2)
console.log(len)

clutter=""
splittext.forEach(function(e,index){
    console.log(e)
    if(index<len){
        clutter += `<span class="a">${e} </span>`
    }
    else{
        clutter += `<span class="b">${e} </span>`
    }
   
}
 
)
h1.innerHTML=clutter
console.log(clutter)


//gsap
gsap.from(".a",{
    y:50,
    duration:0.8,
    opacity:0,
    delay:0.6,
    stagger:0.10

})

gsap.from(".b",{
    y:50,
    duration:0.8,
    opacity:0,
    delay:0.6,
    stagger:-0.10

})