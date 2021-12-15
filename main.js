const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseEnter(){
    h1.innerText = "Mouse is here";
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}

function handlewindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handlewindowOffline(){
    alert("SOS no WIFI");
}

function handleWindowOnline(){
    alert("ALL GOOD");
}

h1.addEventListener("click",handleTitleClick );
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handlewindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handlewindowOffline);
window.addEventListener("online", handleWindowOnline);