let elRuneBtn = document.getElementById("el-rune-btn");
let elRuneImg = elRuneBtn.children[0].children[0];
let eldRuneBtn = document.getElementById("eld-rune-btn");
let eldRuneImg = eldRuneBtn.children[0].children[0];
let tirRuneBtn = document.getElementById("tir-rune-btn");
let tirRuneImg = tirRuneBtn.children[0].children[0];
let nefRuneBtn = document.getElementById("nef-rune-btn");
let nefRuneImg = nefRuneBtn.children[0].children[0];

function elRuneGlow() {
    if (elRuneImg.getAttribute("src") === "assets/runes/el-rune.png") {
        elRuneImg.setAttribute("src", "assets/runes/el-rune-glow.png");

        eldRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    } else {
        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    }
}
function eldRuneGlow() {
    if (eldRuneImg.getAttribute("src") === "assets/runes/el-rune.png") {
        eldRuneImg.setAttribute("src", "assets/runes/el-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    } else {
        eldRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    }
}
function tirRuneGlow() {
    if (tirRuneImg.getAttribute("src") === "assets/runes/el-rune.png") {
        tirRuneImg.setAttribute("src", "assets/runes/el-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    } else {
        tirRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    }
}
function nefRuneGlow() {
    if (nefRuneImg.getAttribute("src") === "assets/runes/el-rune.png") {
        nefRuneImg.setAttribute("src", "assets/runes/el-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    } else {
        nefRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    }
}

elRuneBtn.addEventListener("click", elRuneGlow);
eldRuneBtn.addEventListener("click", eldRuneGlow);
tirRuneBtn.addEventListener("click", tirRuneGlow);
nefRuneBtn.addEventListener("click", nefRuneGlow);