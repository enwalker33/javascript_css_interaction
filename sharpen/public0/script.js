function showColor() {
    const el = document.querySelector("p");
    const container = document.querySelector("div");
    container.innerText = el.style.color;
    
}
function changeColor() {
    const el = document.querySelector("p");
    el.style.color = "#f0f0f0";
    el.style.backgroundColor= "#d7465f";
    el.style.borderRadius = "45px";
    el.style.padding = "10px";

}
function changeStyle() {
    const el = document.querySelector("img");
    el.style.fontFamily = "Arial";
    el.style.fontSize = "20px";
    el.style.borderRadius = "45px";
    el.style.border = "5px solid lightGray";
    img.interText = el.style.color;
}
function changeLayout() {
    const el = document.querySelector("a");
    el.style.display = "block";
}
