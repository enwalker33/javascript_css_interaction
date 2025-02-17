function displayAttribute(){
    const img = document.querySelector('img');
    const imageLink = img.getAttribute('src');
    const p = document.querySelector('p');
    p.innerText = imageLink;
    img.setAttribute("src", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
    const el = document.querySelector('a');
    const linkStyles = el.getAttribute('style');
    p.innerText = linkStyles;
}
function updateElement(){
    const el = document.querySelectorAll('a');
    el.button.setAttribute('placeholder', 'Enter your name');
    el.setAttribute('href', 'https://www.google.com');
    el.setAttribute('style', 'color: red');

}