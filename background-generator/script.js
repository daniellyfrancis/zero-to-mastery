var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomColor(opacidade = 1) {
        let r = Math.random() * 255;
        let g = Math.random() * 255;
        let b = Math.random() * 255;

        return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
}



color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);