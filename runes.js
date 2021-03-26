let elRuneBtn = document.getElementById("el-rune-btn");
let elRuneImg = elRuneBtn.children[0].children[0];
let eldRuneBtn = document.getElementById("eld-rune-btn");
let eldRuneImg = eldRuneBtn.children[0].children[0];
let tirRuneBtn = document.getElementById("tir-rune-btn");
let tirRuneImg = tirRuneBtn.children[0].children[0];
let nefRuneBtn = document.getElementById("nef-rune-btn");
let nefRuneImg = nefRuneBtn.children[0].children[0];
let ethRuneBtn = document.getElementById("eth-rune-btn");
let ethRuneImg = ethRuneBtn.children[0].children[0];
let ithRuneBtn = document.getElementById("ith-rune-btn");
let ithRuneImg = ithRuneBtn.children[0].children[0];
let talRuneBtn = document.getElementById("tal-rune-btn");
let talRuneImg = talRuneBtn.children[0].children[0];
let ralRuneBtn = document.getElementById("ral-rune-btn");
let ralRuneImg = ralRuneBtn.children[0].children[0];
let ortRuneBtn = document.getElementById("ort-rune-btn");
let ortRuneImg = ortRuneBtn.children[0].children[0];
let thulRuneBtn = document.getElementById("thul-rune-btn");
let thulRuneImg = thulRuneBtn.children[0].children[0];
let amnRuneBtn = document.getElementById("amn-rune-btn");
let amnRuneImg = amnRuneBtn.children[0].children[0];

let solRuneBtn = document.getElementById("sol-rune-btn");
let solRuneImg = solRuneBtn.children[0].children[0];
let shaelRuneBtn = document.getElementById("shael-rune-btn");
let shaelRuneImg = shaelRuneBtn.children[0].children[0];
let dolRuneBtn = document.getElementById("dol-rune-btn");
let dolRuneImg = dolRuneBtn.children[0].children[0];
let helRuneBtn = document.getElementById("hel-rune-btn");
let helRuneImg = helRuneBtn.children[0].children[0];
let ioRuneBtn = document.getElementById("io-rune-btn");
let ioRuneImg = ioRuneBtn.children[0].children[0];
let lumRuneBtn = document.getElementById("lum-rune-btn");
let lumRuneImg = lumRuneBtn.children[0].children[0];
let koRuneBtn = document.getElementById("ko-rune-btn");
let koRuneImg = koRuneBtn.children[0].children[0];
let falRuneBtn = document.getElementById("fal-rune-btn");
let falRuneImg = falRuneBtn.children[0].children[0];
let lemRuneBtn = document.getElementById("lem-rune-btn");
let lemRuneImg = lemRuneBtn.children[0].children[0];
let pulRuneBtn = document.getElementById("pul-rune-btn");
let pulRuneImg = pulRuneBtn.children[0].children[0];
let umRuneBtn = document.getElementById("um-rune-btn");
let umRuneImg = umRuneBtn.children[0].children[0];

function elRuneGlow() {
    if (elRuneImg.getAttribute("src") === "assets/runes/el-rune.png") {
        elRuneImg.setAttribute("src", "assets/runes/el-rune-glow.png");

        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
    }
}
function eldRuneGlow() {
    if (eldRuneImg.getAttribute("src") === "assets/runes/eld-rune.png") {
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
    }
}
function tirRuneGlow() {
    if (tirRuneImg.getAttribute("src") === "assets/runes/tir-rune.png") {
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
    }
}
function nefRuneGlow() {
    if (nefRuneImg.getAttribute("src") === "assets/runes/nef-rune.png") {
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
    }
}
function ethRuneGlow() {
    if (ethRuneImg.getAttribute("src") === "assets/runes/eth-rune.png") {
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
    }
}
function ithRuneGlow() {
    if (ithRuneImg.getAttribute("src") === "assets/runes/ith-rune.png") {
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
    }
}
function talRuneGlow() {
    if (talRuneImg.getAttribute("src") === "assets/runes/tal-rune.png") {
        talRuneImg.setAttribute("src", "assets/runes/tal-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
    }
}
function ralRuneGlow() {
    if (ralRuneImg.getAttribute("src") === "assets/runes/ral-rune.png") {
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
    }
}
function ortRuneGlow() {
    if (ortRuneImg.getAttribute("src") === "assets/runes/ort-rune.png") {
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
    }
}
function thulRuneGlow() {
    if (thulRuneImg.getAttribute("src") === "assets/runes/thul-rune.png") {
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    } else {
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
    }
}
function amnRuneGlow() {
    if (amnRuneImg.getAttribute("src") === "assets/runes/amn-rune.png") {
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune-glow.png");

        elRuneImg.setAttribute("src", "assets/runes/el-rune.png");
        eldRuneImg.setAttribute("src", "assets/runes/eld-rune.png");
        tirRuneImg.setAttribute("src", "assets/runes/tir-rune.png");
        nefRuneImg.setAttribute("src", "assets/runes/nef-rune.png");
        ethRuneImg.setAttribute("src", "assets/runes/eth-rune.png");
        ithRuneImg.setAttribute("src", "assets/runes/ith-rune.png");
        talRuneImg.setAttribute("src", "assets/runes/tal-rune.png");
        ralRuneImg.setAttribute("src", "assets/runes/ral-rune.png");
        ortRuneImg.setAttribute("src", "assets/runes/ort-rune.png");
        thulRuneImg.setAttribute("src", "assets/runes/thul-rune.png");
    } else {
        amnRuneImg.setAttribute("src", "assets/runes/amn-rune.png");
    }
}

function solRuneGlow() {
    if (solRuneImg.getAttribute("src") === "assets/runes/sol-rune.png") {
        solRuneImg.setAttribute("src", "assets/runes/sol-rune-glow.png");

        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
    }
}
function shaelRuneGlow() {
    if (shaelRuneImg.getAttribute("src") === "assets/runes/shael-rune.png") {
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
    }
}
function dolRuneGlow() {
    if (dolRuneImg.getAttribute("src") === "assets/runes/dol-rune.png") {
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
    }
}
function helRuneGlow() {
    if (helRuneImg.getAttribute("src") === "assets/runes/hel-rune.png") {
        helRuneImg.setAttribute("src", "assets/runes/hel-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
    }
}
function ioRuneGlow() {
    if (ioRuneImg.getAttribute("src") === "assets/runes/io-rune.png") {
        ioRuneImg.setAttribute("src", "assets/runes/io-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
    }
}
function lumRuneGlow() {
    if (lumRuneImg.getAttribute("src") === "assets/runes/lum-rune.png") {
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
    }
}
function koRuneGlow() {
    if (koRuneImg.getAttribute("src") === "assets/runes/ko-rune.png") {
        koRuneImg.setAttribute("src", "assets/runes/ko-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
    }
}
function falRuneGlow() {
    if (falRuneImg.getAttribute("src") === "assets/runes/fal-rune.png") {
        falRuneImg.setAttribute("src", "assets/runes/fal-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
    }
}
function lemRuneGlow() {
    if (lemRuneImg.getAttribute("src") === "assets/runes/lem-rune.png") {
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
    }
}
function pulRuneGlow() {
    if (pulRuneImg.getAttribute("src") === "assets/runes/pul-rune.png") {
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    } else {
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
    }
}
function umRuneGlow() {
    if (umRuneImg.getAttribute("src") === "assets/runes/um-rune.png") {
        umRuneImg.setAttribute("src", "assets/runes/um-rune-glow.png");

        solRuneImg.setAttribute("src", "assets/runes/sol-rune.png");
        shaelRuneImg.setAttribute("src", "assets/runes/shael-rune.png");
        dolRuneImg.setAttribute("src", "assets/runes/dol-rune.png");
        helRuneImg.setAttribute("src", "assets/runes/hel-rune.png");
        ioRuneImg.setAttribute("src", "assets/runes/io-rune.png");
        lumRuneImg.setAttribute("src", "assets/runes/lum-rune.png");
        koRuneImg.setAttribute("src", "assets/runes/ko-rune.png");
        falRuneImg.setAttribute("src", "assets/runes/fal-rune.png");
        lemRuneImg.setAttribute("src", "assets/runes/lem-rune.png");
        pulRuneImg.setAttribute("src", "assets/runes/pul-rune.png");
    } else {
        umRuneImg.setAttribute("src", "assets/runes/um-rune.png");
    }
}

elRuneBtn.addEventListener("click", elRuneGlow);
eldRuneBtn.addEventListener("click", eldRuneGlow);
tirRuneBtn.addEventListener("click", tirRuneGlow);
nefRuneBtn.addEventListener("click", nefRuneGlow);
ethRuneBtn.addEventListener("click", ethRuneGlow);
ithRuneBtn.addEventListener("click", ithRuneGlow);
talRuneBtn.addEventListener("click", talRuneGlow);
ralRuneBtn.addEventListener("click", ralRuneGlow);
ortRuneBtn.addEventListener("click", ortRuneGlow);
thulRuneBtn.addEventListener("click", thulRuneGlow);
amnRuneBtn.addEventListener("click", amnRuneGlow);

solRuneBtn.addEventListener("click", solRuneGlow);
shaelRuneBtn.addEventListener("click", shaelRuneGlow);
dolRuneBtn.addEventListener("click", dolRuneGlow);
helRuneBtn.addEventListener("click", helRuneGlow);
ioRuneBtn.addEventListener("click", ioRuneGlow);
lumRuneBtn.addEventListener("click", lumRuneGlow);
koRuneBtn.addEventListener("click", koRuneGlow);
falRuneBtn.addEventListener("click", falRuneGlow);
lemRuneBtn.addEventListener("click", lemRuneGlow);
pulRuneBtn.addEventListener("click", pulRuneGlow);
umRuneBtn.addEventListener("click", umRuneGlow);