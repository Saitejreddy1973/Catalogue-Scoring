function disp() {
    document.getElementById("cont1").style.height = "auto";
    document.getElementById("cont1").style.opacity = 1;
    scrollBy(0,600);
}
function hide() {
    document.getElementById("cont1").style.height = "0px";
    document.getElementById("cont1").style.opacity = 0;
    scrollBy(0,-600);
}