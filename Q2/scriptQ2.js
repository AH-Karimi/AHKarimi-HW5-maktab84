// first all element pass with dom
const increase=document.querySelector(".increase");
const decrease=document.querySelector(".decrease");
const reset=document.querySelector(".reset");
const counterValue=document.querySelector(".counter span");
//default count
let count=0;
// run increase button 
increase.addEventListener("click",()=>{
// arrow function with any click plus to count value
    count++;
    counterValue.textContent=count;
})
decrease.addEventListener("click",()=>{
    count--;
    counterValue.textContent=count;
})
reset.addEventListener("click",()=>{
    count=0;
    counterValue.textContent=count;
})