const btn = document.querySelector("#btn");
const para= document.querySelector("#para");
const btn1 = document.querySelector("#btn1");
const icons = document.querySelector(".icons");

btn.addEventListener("click",() => {
    para.classList.toggle("hidden");
})

btn1.addEventListener("click",() => {
    icons.classList.toggle("hidden")
})

