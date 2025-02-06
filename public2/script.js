function toggleBold() {
    const el = document.querySelector('p');
    el.classList.toggle("bold");
}


function turnBold() {
    const el = document.querySelector('p');
    el.setAttribute("class", "bold");

}
function addBold() {
    const el = document.querySelector('p');
    el.classList.add("bold");
}
function removeBold() {
    const el = document.querySelector('p');
    el.classList.remove("bold");
}
function turnItalic() {
    const el = document.querySelector('p');
    el.setAttribute("class", "italic");
}   
function removeItalic() {
    const el = document.querySelector('p');
    el.classList.remove("italic");
}
function toggleItalic() {
    const el = document.querySelector('p');
    el.classList.toggle("italic");
}
function addClasses() {
    const el = document.querySelector('p');
    el.classList.add("highlight", "underline");
}
function removeClasses() {
    const el = document.querySelector('p');
    el.classList.remove("highlight", "underline");
}
function toggleHighlight() {
    const el = document.querySelector('p');
    el.classList.toggle("highlight");
}
function toggleUnderline() {
    const el = document.querySelector('p');
    el.classList.toggle("underline");
}