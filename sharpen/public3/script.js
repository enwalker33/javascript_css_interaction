const lang = document.getElementById("lang").value;
  
function showLang() {
 const paragraph = document.getElementById("display");
 const selectedValue = document.getElementById("lang").value;
 paragraph.innerText = "You selected: " + selectedValue;
}