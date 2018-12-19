let button = document.getElementById("button");
let css = document.querySelector("p");
let color1=document.querySelector(".color1");
let color2=document.querySelector(".color2");
let body = document.getElementById("body");

window.onload = function() {
    changeBackground(body);
    css.textContent=body.style.background+";"


};
button.addEventListener("click", function () {
    changeBackground(button);

});

function changeBackground(arg) {
    arg.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

        css.textContent=body.style.background+";"

}

function generateRandomColor1(){
    let colors = [];
    for(let i=0;i<=1;i++){
       let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
       colors.push(color);
       console.log(colors)
    }
    color1.value = colors[0];
    color2.value = colors[1];
    changeBackground(body);
}

