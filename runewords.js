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
let runewords = [
    {
        name: "Breath of the Dying",
        bases: "6 Socket Weapons",
        runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
        level: 69,
        stats: [
            "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
            "Indestructible",
            "+60% Increased Attack Speed",
            "+350-400% Enhanced Damage (varies)",
            "-25% Target Defense",
            "+50 To Attack Rating",
            "+200% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "7% Mana Stolen Per Hit",
            "12-15% Life Stolen Per Hit (varies)",
            "Prevent Monster Heal",
            "+30 To All Attributes",
            "+1 To Light Radius",
            "Requirements -20%"
        ],
        ladder: false
    },
    {
        name: "Pride",
        bases: "4 Socket Polearms",
        runes: ["Cham", "Sur", "Io", "Lo"],
        level: 67,
        stats: [
            "25% Chance To Cast Level 17 Fire Wall When Struck",
            "Level 16-20 Concentration Aura When Equipped (varies)",
            "260-300% Bonus To Attack Rating (varies)",
            "+1-99% Damage To Demons (Based on Character Level)",
            "Adds 50-280 Lightning Damage",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3",
            "+10 To Vitality",
            "Replenish Life +8",
            "1-185% Extra Gold From Monsters (Based on Character Level)"
        ],
        ladder: true
    },
    {
        name: "Hand of Justice",
        bases: "4 Socket Weapons",
        runes: ["Sur", "Cham", "Amn", "Lo"],
        level: 67,
        stats: [
            "100% Chance To Cast Level 36 Blaze When You Level-Up",
            "100% Chance To Cast Level 48 Meteor When You Die",
            "Level 16 Holy Fire Aura When Equipped",
            "+33% Increased Attack Speed",
            "+280-330% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "7% Life Stolen Per Hit",
            "-20% To Enemy Fire Resistance",
            "20% Deadly Strike",
            "Hit Blinds Target",
            "Freezes Target +3"
        ],
        ladder: false
    },
    {
        name: "Doom",
        bases: "5 Socket Axes/Polearms/Hammers",
        runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
        level: 67,
        stats: [
            "5% Chance To Cast Level 18 Volcano On Striking",
            "Level 12 Holy Freeze Aura When Equipped",
            "+2 To All Skills",
            "+45% Increased Attack Speed",
            "+330-370% Enhanced Damage (varies)",
            "-(40-60)% To Enemy Cold Resistance (varies)",
            "20% Deadly Strike",
            "25% Chance of Open Wounds",
            "Prevent Monster Heal",
            "Freezes Target +3",
            "Requirements -20%"
        ],
        ladder: false
    },
    {
        name: "Last Wish",
        bases: "6 Socket Swords/Hammers/Axes",
        runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
        level: 65,
        stats: [
            "6% Chance To Cast Level 11 Fade When Struck",
            "10% Chance To Cast Level 18 Life Tap On Striking",
            "20% Chance To Cast Level 20 Charged Bolt On Attack",
            "Level 17 Might Aura When Equipped",
            "+330-375% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "60-70% Chance of Crushing Blow (varies)",
            "Prevent Monster Heal",
            "Hit Blinds Target",
            "+0-49% Chance of Getting Magic Items (Based on Character Level)"
        ],
        ladder: true
    },
    {
        name: "Destruction",
        bases: "5 Socket Polearms/Swords",
        runes: ["Vex", "Lo", "Ber", "Jah", "Ko"],
        level: 65,
        stats: [
            "23% Chance To Cast Level 12 Volcano On Striking",
            "5% Chance To Cast Level 23 Molten Boulder On Striking",
            "100% Chance To Cast level 45 Meteor When You Die",
            "15% Chance To Cast Level 22 Nova On Attack",
            "+350% Enhanced Damage",
            "Ignore Target's Defense",
            "Adds 100-180 Magic Damage",
            "7% Mana Stolen Per Hit",
            "20% Chance Of Crushing Blow",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+10 To Dexterity"
        ],
        ladder: true
    },
    {
        name: "Enigma",
        bases: "3 Socket Body Armor",
        runes: ["Jah", "Ith", "Ber"],
        level: 65,
        stats: [
            "+2 To All Skills",
            "+45% Faster Run/Walk",
            "+1 To Teleport",
            "+750-775 Defense (varies)",
            "+0-74 To Strength (Based On Character Level)",
            "Increase Maximum Life 5%",
            "Damage Reduced By 8%",
            "+14 Life After Each Kill",
            "15% Damage Taken Goes To Mana",
            "+1-99% Better Chance of Getting Magic Items (Based On Character Level)"
        ],
        ladder: false
    },
    {
        name: "Phoenix",
        bases: "4 Socket Weapons/Shields",
        runes: ["Vex", "Vex", "Lo", "Jah"],
        level: 65,
        stats: {
            weapons: [
                "100% Chance To Cast level 40 Blaze When You Level-up",
                "40% Chance To Cast Level 22 Firestorm On Striking",
                "Level 10-15 Redemption Aura When Equipped (varies)",
                "+350-400% Enhanced Damage (varies)",
                "Ignores Target's Defense",
                "14% Mana Stolen Per Hit",
                "-28% To Enemy Fire Resistance",
                "20% Deadly Strike",
                "+350-400 Defense Vs. Missile (varies)",
                "+15-21 Fire Absorb (varies)"
            ],
            shields: [
                "100% Chance To Cast level 40 Blaze When You Level-up",
                "40% Chance To Cast Level 22 Firestorm On Striking",
                "Level 10-15 Redemption Aura When Equipped (varies)",
                "+350-400% Enhanced Damage (varies)",
                "-28% To Enemy Fire Resistance",
                "+350-400 Defense Vs. Missile (varies)",
                "+50 To Life",
                "+5% To Maximum Lightning Resist",
                "+10% To Maximum Fire Resist",
                "+15-21 Fire Absorb (varies)"
            ]
        },
        ladder: true
    },
    {
        name: "Brand",
        bases: "4 Socket Missile Weapons",
        runes: ["Jah", "Lo", "Mal", "Gul"],
        level: 65,
        stats: [
            "35% Chance To Cast Level 14 Amplify Damage When Struck",
            "100% Chance To Cast Level 18 Bone Spear On Striking",
            "Fires Explosive Arrows or Bolts",
            "+260-340% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "20% Bonus to Attack Rating",
            "+280-330% Damage To Demons (varies)",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "Knockback"
        ],
        ladder: true
    },
    {
        name: "Faith",
        bases: "4 Socket Missile Weapons",
        runes: ["Ohm", "Jah", "Lem", "Eld"],
        level: 65,
        stats: [
            "Level 12-15 Fanaticism Aura When Equipped (varies)",
            "+1-2 To All Skills (varies)",
            "+330% Enhanced Damage",
            "Ignore Target's Defense",
            "300% Bonus To Attack Rating",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "+120 Fire Damage",
            "All Resistances +15",
            "10% Reanimate As: Returned",
            "75% Extra Gold From Monsters"
        ],
        ladder: true
    },
    {
        name: "Famine",
        bases: "4 Socket Axes/Hammers",
        runes: ["Fal", "Ohm", "Ort", "Jah"],
        level: 65,
        stats: [
            "+30% Increased Attack Speed",
            "+320-370% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "Adds 180-200 Magic Damage",
            "Adds 50-200 Fire Damage",
            "Adds 51-250 Lightning Damage",
            "Adds 50-200 Cold Damage",
            "12% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+10 To Strength"
        ],
        ladder: false
    },
    {
        name: "Fury",
        bases: "3 Socket Melee Weapons",
        runes: ["Jah", "Gul", "Eth"],
        level: 65,
        stats: [
            "40% Increased Attack Speed",
            "+209% Enhanced Damage",
            "Ignore Target's Defense",
            "-25% Target Defense",
            "20% Bonus To Attack Rating",
            "6% Life Stolen Per Hit",
            "33% Deadly Strike",
            "66% Chance Of Open Wounds",
            "+5 To Frenzy (Barbarian Only)",
            "Prevent Monster Heal"
        ],
        ladder: false
    },
    {
        name: "Dream",
        bases: "3 Socket Helms/Shields",
        runes: ["Io", "Jah", "Pul"],
        level: 65,
        stats: [
            "10% Chance To Cast Level 15 Confuse When Struck",
            "Level 15 Holy Shock Aura When Equipped",
            "+20-30% Faster Hit Recovery (varies)",
            "+30% Enhanced Defense",
            "+150-220 Defense (varies)",
            "+10 To Vitality",
            "Increase Maximum Life 5% (Helms Only)",
            "+50 To Life (Shields Only)",
            "+0-61 To Mana (Based On Character Level)",
            "All Resistances +5-20 (varies)",
            "12-25% Better Chance of Getting Magic Items (varies)"
        ],
        ladder: true
    },
    {
        name: "Ice",
        bases: "4 Socket Missile Weapons",
        runes: ["Amn", "Shael", "Jah", "Lo"],
        level: 65,
        stats: [
            "100% Chance To Cast Level 40 Blizzard When You Level-up",
            "25% Chance To Cast Level 22 Frost Nova On Striking",
            "Level 18 Holy Freeze Aura When Equipped",
            "+20% Increased Attack Speed",
            "+140-210% Enhanced Damage (varies)",
            "Ignore Target's Defense",
            "+25-30% To Cold Skill Damage (varies)",
            "7% Life Stolen Per Hit",
            "-20% To Enemy Cold Resistance",
            "20% Deadly Strike",
            "3-309 Extra Gold From Monsters (Based on Character Level)"
        ],
        ladder: true
    },
    {
        name: "Eternity",
        bases: "5 Socket Melee Weapons",
        runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
        level: 63,
        stats: [
            "Indestructible",
            "+260-310% Enhanced Damage (varies)",
            "+9 To Minimum Damage",
            "7% Life Stolen Per Hit",
            "20% Chance of Crushing Blow",
            "Hit Blinds Target",
            "Slows Target By 33%",
            "Replenish Life +16",
            "Regenerate Mana 16%",
            "Cannot Be Frozen",
            "30% Better Chance Of Getting Magic Items",
            "Level 8 Revive (88 Charges)"
        ],
        ladder: false
    },
    {
        name: "Infinity",
        bases: "4 Socket Polearms",
        runes: ["Ber", "Mal", "Ber", "Ist"],
        level: 63,
        stats: [
            "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
            "Level 12 Conviction Aura When Equipped",
            "+35% Faster Run/Walk",
            "+255-325% Enhanced Damage (varies)",
            "-(45-55)% To Enemy Lightning Resistance (varies)",
            "40% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "0-49 To Vitality (Based on Character Level)",
            "30% Better Chance of Getting Magic Items",
            "Level 21 Cyclone Armor (30 Charges)"
        ],
        ladder: true
    },
    {
        name: "Chains of Honor",
        bases: "4 Socket Body Armor",
        runes: ["Dol", "Um", "Ber", "Ist"],
        level: 63,
        stats: [
            "+2 To All Skills",
            "+200% Damage To Demons",
            "+100% Damage To Undead",
            "8% Life Stolen Per Hit",
            "+70% Enhanced Defense",
            "+20 To Strength",
            "Replenish Life +7",
            "All Resistances +65",
            "Damage Reduced By 8%",
            "25% Better Chance of Getting Magic Items"
        ],
        ladder: false
    },
    {
        name: "Holy Thunder",
        bases: "4 Socket Scepters",
        runes: ["Eth", "Ral", "Ort", "Tal"],
        level: 23,
        stats: [
            "+60% Enhanced Damage",
            "+10 To Maximum Damage",
            "-25% Target Defense",
            "Adds 5-30 Fire Damage",
            "Adds 21-110 Lightning Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+3 To Holy Shock (Paladin Only)",
            "+5 To Maximum Lightning Resistance",
            "Lightning Resistance +60%",
            "Level 7 Chain Lightning (60 Charges)"
        ],
        ladder: false
    },
    {
        name: "Ancient's Pledge",
        bases: "3 Socket Shields",
        runes: ["Ral", "Ort", "Tal"],
        level: 21,
        stats: [
            "+50% Enhanced Defense",
            "Cold Resist +43%",
            "Lightning Resist +48%",
            "Fire Resist +48%",
            "Poison Resist +48%",
            "10% Damage Goes To Mana"
        ],
        ladder: false
    },
    {
        name: "Zephyr",
        bases: "2 Socket Missile Weapons",
        runes: ["Ort", "Eth"],
        level: 21,
        stats: [
            "7% Chance To Cast Level 1 Twister When Struck",
            "25% Faster Run/Walk",
            "25% Increased Attack Speed",
            "+33% Enhanced Damage",
            "-25% Target Defense",
            "+66 To Attack Rating",
            "Adds 1-50 Lightning Damage",
            "+25 Defense"
        ],
        ladder: false
    },
    {
        name: "Leaf",
        bases: "2 Socket Staves",
        runes: ["Tir", "Ral"],
        level: 19,
        stats: [
            "+3 To Fire Skills",
            "Adds 5-30 Fire Damage",
            "+3 To Inferno (Sorceress Only)",
            "+3 To Warmth (Sorceress Only)",
            "+3 To Fire Bolt (Sorceress Only)",
            "+2-198 To Defense (Based On Character Level)",
            "Cold Resist +33%",
            "+2 To Mana After Each Kill"
        ],
        ladder: false
    },
    {
        name: "Stealth",
        bases: "2 Socket Body Armor",
        runes: ["Tal", "Eth"],
        level: 17,
        stats: [
            "25% Faster Run/Walk",
            "25% Faster Cast Rate",
            "25% Faster Hit Recovery",
            "+6 To Dexterity",
            "Regenerate Mana 15%",
            "+15 To Maximum Stamina",
            "Poison Resist +30%",
            "Magic Damage Reduced By 3"
        ],
        ladder: false
    },
    {
        name: "Malice",
        bases: "3 Socket Melee Weapons",
        runes: ["Ith", "El", "Eth"],
        level: 15,
        stats: [
            "+33% Enhanced Damage",
            "+9 To Maximum Damage",
            "-25% Target Defense",
            "+50 To Attack Rating",
            "100% Chance Of Open Wounds",
            "Prevent Monster Heal",
            "-100 To Monster Defense Per Hit",
            "Drain Life -5"
        ],
        ladder: false
    },
    {
        name: "Nadir",
        bases: "2 Socket Helms",
        runes: ["Nef", "Tir"],
        level: 13,
        stats: [
            "+50% Enhanced Defense",
            "+10 Defense",
            "+30 Defense vs. Missile",
            "+5 To Strength",
            "+2 To Mana After Each Kill",
            "-33% Extra Gold From Monsters",
            "-3 To Light Radius",
            "Level 13 Cloak of Shadows (9 Charges)"
        ],
        ladder: false
    },
    {
        name: "Steel",
        bases: "2 Socket Swords/Axes/Maces",
        runes: ["Tir", "El"],
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
        ],
        ladder: false
    }
]

function removeAllRunes(array, elem) {
    let index = array.indexOf(elem);
    while (index > -1) {
        array.splice(index, 1);
        index = array.indexOf(elem);
    }
}

function searchRunewords() {
    /*Adds selected runes to an array and removes unselected runes*/
    runeBtnChecks.forEach(function (runeBtnCheck) {
        if (runeBtnCheck.checked === true) {
            selectedRunes.push(runeBtnCheck.value);
        } else {
            removeAllRunes(selectedRunes, runeBtnCheck.value)
        }
    })

    /*Removes duplicates from the array of selected runes*/
    let selectedRunesNoDupes = selectedRunes.filter(function (selectedRune, index) {
        return selectedRunes.indexOf(selectedRune) === index;
    })
    console.log(selectedRunesNoDupes)

    /*Finds all runewords that contain selected runes*/
    for (let i = 0; i < runewords.length; i++) {
        if (runewords[i].runes.every(rune => selectedRunesNoDupes.includes(rune))) {
            console.log(runewords[i].name)
        }
    }
}