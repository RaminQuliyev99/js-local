function cng(){
let inpop=document.querySelectorAll("input")[0];
let inpbord=document.querySelectorAll("input")[1];
let set1=localStorage.setItem( "opacity","inpop.value");
let set2=localStorage.setItem( "border-radius","inpbord.value");
// inpop.innerHTML=localStorage.setItem("opacity");
};
let css=document.querySelectorAll("b-op");

css.addEventListener('onchange', ()=>{
    localStorage.getItem("opacity");
    });
