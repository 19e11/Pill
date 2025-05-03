let red= document.querySelector(".red");
let blue= document.querySelector(".blue");

function naruto(){
    window.location.href="./naruto.html";
}
function sasuke(){
    window.location.href="./sasuke.html";
}

blue.addEventListener("click",()=>{
    sasuke();
});
red.addEventListener("click",()=>{
    naruto();
});

