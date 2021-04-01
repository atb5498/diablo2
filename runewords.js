function openOffcanvas() {
    // document.getElementById("myOffcanvas").style.width = "250px";
    document.getElementById("myOffcanvas").classList.add("offCanvasWidth");
}

function openNav3() {
    document.getElementById("myCanvasNav").style.width = "100%";
    document.getElementById("myCanvasNav").style.opacity = "0.8";
}

function closeOffcanvas() {
    // document.getElementById("myOffcanvas").style.width = "0%";
    document.getElementById("myOffcanvas").classList.remove("offCanvasWidth");
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0";
}