window.addEventListener("load",()=>{
setTimeout(()=>{
document.getElementById("loader").classList.add("oculto");
},1800);
});

document.querySelector("form").addEventListener("submit",function(e){
e.preventDefault();
alert("Mensaje enviado correctamente 🚀");
});

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{
const update=()=>{
const target=+counter.getAttribute("data-target");
const count=+counter.innerText;
const speed=target/100;

if(count<target){
counter.innerText=Math.ceil(count+speed);
setTimeout(update,20);
}else{
counter.innerText=target;
}
};
update();
});

function reveal(){
let reveals=document.querySelectorAll(".reveal");

reveals.forEach(item=>{
let top=item.getBoundingClientRect().top;
let visible=window.innerHeight-100;

if(top<visible){
item.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
reveal();

document.querySelectorAll(".flip-card").forEach(card=>{
card.addEventListener("click",()=>{
card.classList.toggle("active");
});
});