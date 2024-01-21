const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const speednum = document.getElementById("speednum");
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");


btn.addEventListener("click", async function () {
    let num = speednum.value;
    let r_value = r.value; let g_value = g.value; let b_value = b.value;         
    for (let i = r_value; i < 255; i++) {
        for (let j = g_value; j < 255; j++) {
        for (let k = b_value; k < 255; k++) {
            let hexColor = "rgba(" + i + "," + j + "," + k + ")";
            await sleep(num); // Reduced sleep time for faster visualization
            color.textContent = hexColor;
            document.body.style.backgroundColor = hexColor;
        }
        }
    }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
