const cross = document.querySelector(".overlay__close");
const overlay = document.querySelector(".overlay");
const burguer = document.querySelector(".nav__rigth");
const links = document.querySelector(".overlay__links").querySelectorAll("a");

overlay.style.display = "None";

const overlay_hide = () => {
    overlay.classList.remove("active");
    document.body.classList.remove("stop-scrolling");
}

const overlay_show = () => {
    overlay.style.display = "block";
    setTimeout(()=>{overlay.classList.add("active");}, 0)
    document.body.classList.add("stop-scrolling");
}

burguer.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
    overlay_show();
})

cross.addEventListener("click", ()=>{
    overlay_hide();
    setTimeout(()=>{overlay.style.display = "None"}, 500)
})
 
links.forEach((link)=>{
    link.addEventListener("click",  ()=>{
        overlay_hide();
        overlay.style.display = "None"
    })
})

