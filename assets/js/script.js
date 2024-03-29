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

scanBtn.addEventListener("click", () => {
  scanBtn.classList.add("active");
  generateBtn.classList.remove("active");
  scan.hidden = false;
  generate.hidden = true;
});

document.querySelector(".generate button").addEventListener("click", (e) => {
  let imgBox = document.getElementById("imgBox");
  let QR_img = document.getElementById("QR_img");
  let QR_text = document.getElementById("QR_text");

  QR_img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
    QR_text.value;
  imgBox.classList.add("show-img");

  QR_img.addEventListener("load", (e) => {
    const download = document.querySelector(".generate a");
    download.href = e.target.src;
    download.classList.remove("hidden");
  });
});

import QrScanner from "https://cdnjs.cloudflare.com/ajax/libs/qr-scanner/1.4.1/qr-scanner.min.js";

document
  .querySelector('.scan .type input[type="file"]')
  .addEventListener("change", (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files["0"]);
    reader.addEventListener("load", (e) => {
      document.querySelector(
        ".scan .show"
      ).innerHTML = `<img src=${e.target.result} />`;

      QrScanner.scanImage(document.querySelector(".scan .show img"))
        .then(
          (result) =>{
            document.querySelector(".scan .output").classList.remove("hidden");
            document.querySelector(".scan .output").value = result;
          } 
        )
        .catch(
          (error) => {
            document.querySelector(".scan .output").classList.remove("hidden");
            document.querySelector(".scan .output").value = "No QR code found!";
          }
            
        );
    });
  });
