const btn = document.getElementById('hamburger');
const menu = document.getElementById('nav-links');

btn.addEventListener('click', () => {
    // menu.classList.toggle('active');
    if(menu.style.display === "block"){
        menu.style.display = "none"
    }else{
        menu.style.display = "block"

    }
    console.log("Button clicked! Active class is now: " + menu.classList.contains('active'));
});