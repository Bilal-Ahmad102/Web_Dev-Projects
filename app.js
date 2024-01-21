const colors = ["green","blue","rgba(133,122,200)", "pink"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    const randm_mun = getRandomNum();
    document.body.style.backgroundColor = colors[randm_mun];
    color.textContent = colors[randm_mun];
})

function getRandomNum(){
    return Math.floor(Math.random() * colors.length)
}