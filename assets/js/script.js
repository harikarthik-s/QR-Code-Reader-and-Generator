const generateBtn = document.querySelector(".controls button:first-of-type");
const scanBtn = document.querySelector(".controls button:last-of-type");
const generate = document.querySelector(".generate");
const scan = document.querySelector(".scan");

generateBtn.addEventListener("click", () => {
  generateBtn.classList.add("active");
  scanBtn.classList.remove("active");
  generate.hidden = false;
  scan.hidden = true;
});

scanBtn.addEventListener('click', ()=>{
    scanBtn.classList.add("active");
    generateBtn.classList.remove("active");
    scan.hidden= false;
    generate.hidden = true;
})
