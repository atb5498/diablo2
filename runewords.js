/*Off-Canvas Menu*/
function openOffcanvas() {
    document.getElementById("myOffcanvas").classList.add("offCanvasWidth");
}
function openNav() {
    document.getElementById("myCanvasNav").style.width = "100%";
    document.getElementById("myCanvasNav").style.opacity = "0.8";
}
function closeOffcanvas() {
    document.getElementById("myOffcanvas").classList.remove("offCanvasWidth");
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0";
}

let runeBtnChecks = document.querySelectorAll(".rune-btn-check");
let runewordsList = document.getElementById("runewords-list");
let selectedRunes = [];
let runewords = {
    name: "Steel",
    runes: ["Tir", "El"],
    bases: ["Swords", "Axes", "Maces"],
    level: 13,
    stats: [
        "25% Increased Attack Speed",
        "20% Enhanced Damage",
        "+3 To Minimum Damage",
        "+3 To Maximum Damage",
        "+50 To Attack Rating",
        "50% Chance Of Open Wounds",
        "+2 To Mana After Each Kill",
        "+1 To Light Radius"
    ]
};

function removeAllRunes(array, elem) {
    var index = array.indexOf(elem);
    while (index > -1) {
        array.splice(index, 1);
        index = array.indexOf(elem);
    }
}

function searchRunewords() {
    runeBtnChecks.forEach(function (runeBtnCheck) {
        if (runeBtnCheck.checked === true) {
            selectedRunes.push(runeBtnCheck.value);
        } else {
            removeAllRunes(selectedRunes, runeBtnCheck.value)
        }
    })

    let selectedRunesNoDupes = selectedRunes.filter(function (selectedRune, index) {
        return selectedRunes.indexOf(selectedRune) === index;
    })
    console.log(selectedRunesNoDupes)

    selectedRunesNoDupes.forEach(function (selectedRuneNoDupe) {
        runewords.runes.every(function (rune) {
            if (selectedRuneNoDupe.includes(rune)) {
                console.log(runewords.name)
            }
        });

    })
}