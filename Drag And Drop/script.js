const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageViwe = document.getElementById("img-viwe");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageViwe.style.backgroundImage = `url(${imgLink})`;
    imageViwe.textContent = "";
    imageViwe.style.border = 0;
    imageViwe.style.backgroundSize = 'cover';
    imageViwe.style.boxShadow = '2px 4px 2px 1px #808080';
}