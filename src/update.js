function fullscreen() {
    let epframecontent = document.getElementById("epframecontent");
    if(epframecontent){
        epframecontent.style.height = "calc(100vh - 130px)";
    }
}

window.addEventListener('hashchange', fullscreen);
window.onload = fullscreen;
