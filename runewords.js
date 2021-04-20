let btncheck1 = document.getElementById("btncheck1");
let checked1 = JSON.parse(localStorage.getItem("btncheck1"));
let btncheck2 = document.getElementById("btncheck2");
let checked2 = JSON.parse(localStorage.getItem("btncheck2"));
let btncheck3 = document.getElementById("btncheck3");
let checked3 = JSON.parse(localStorage.getItem("btncheck3"));
let btncheck4 = document.getElementById("btncheck4");
let checked4 = JSON.parse(localStorage.getItem("btncheck4"));
let btncheck5 = document.getElementById("btncheck5");
let checked5 = JSON.parse(localStorage.getItem("btncheck5"));
let btncheck6 = document.getElementById("btncheck6");
let checked6 = JSON.parse(localStorage.getItem("btncheck6"));
let btncheck7 = document.getElementById("btncheck7");
let checked7 = JSON.parse(localStorage.getItem("btncheck7"));
let btncheck8 = document.getElementById("btncheck8");
let checked8 = JSON.parse(localStorage.getItem("btncheck8"));
let btncheck9 = document.getElementById("btncheck9");
let checked9 = JSON.parse(localStorage.getItem("btncheck9"));
let btncheck10 = document.getElementById("btncheck10");
let checked10 = JSON.parse(localStorage.getItem("btncheck10"));
let btncheck11 = document.getElementById("btncheck11");
let checked11 = JSON.parse(localStorage.getItem("btncheck11"));
let btncheck12 = document.getElementById("btncheck12");
let checked12 = JSON.parse(localStorage.getItem("btncheck12"));
let btncheck13 = document.getElementById("btncheck13");
let checked13 = JSON.parse(localStorage.getItem("btncheck13"));
let btncheck14 = document.getElementById("btncheck14");
let checked14 = JSON.parse(localStorage.getItem("btncheck14"));
let btncheck15 = document.getElementById("btncheck15");
let checked15 = JSON.parse(localStorage.getItem("btncheck15"));
let btncheck16 = document.getElementById("btncheck16");
let checked16 = JSON.parse(localStorage.getItem("btncheck16"));
let btncheck17 = document.getElementById("btncheck17");
let checked17 = JSON.parse(localStorage.getItem("btncheck17"));
let btncheck18 = document.getElementById("btncheck18");
let checked18 = JSON.parse(localStorage.getItem("btncheck18"));
let btncheck19 = document.getElementById("btncheck19");
let checked19 = JSON.parse(localStorage.getItem("btncheck19"));
let btncheck20 = document.getElementById("btncheck20");
let checked20 = JSON.parse(localStorage.getItem("btncheck20"));
let btncheck21 = document.getElementById("btncheck21");
let checked21 = JSON.parse(localStorage.getItem("btncheck21"));
let btncheck22 = document.getElementById("btncheck22");
let checked22 = JSON.parse(localStorage.getItem("btncheck22"));
let btncheck23 = document.getElementById("btncheck23");
let checked23 = JSON.parse(localStorage.getItem("btncheck23"));
let btncheck24 = document.getElementById("btncheck24");
let checked24 = JSON.parse(localStorage.getItem("btncheck24"));
let btncheck25 = document.getElementById("btncheck25");
let checked25 = JSON.parse(localStorage.getItem("btncheck25"));
let btncheck26 = document.getElementById("btncheck26");
let checked26 = JSON.parse(localStorage.getItem("btncheck26"));
let btncheck27 = document.getElementById("btncheck27");
let checked27 = JSON.parse(localStorage.getItem("btncheck27"));
let btncheck28 = document.getElementById("btncheck28");
let checked28 = JSON.parse(localStorage.getItem("btncheck28"));
let btncheck29 = document.getElementById("btncheck29");
let checked29 = JSON.parse(localStorage.getItem("btncheck29"));
let btncheck30 = document.getElementById("btncheck30");
let checked30 = JSON.parse(localStorage.getItem("btncheck30"));
let btncheck31 = document.getElementById("btncheck31");
let checked31 = JSON.parse(localStorage.getItem("btncheck31"));
let btncheck32 = document.getElementById("btncheck32");
let checked32 = JSON.parse(localStorage.getItem("btncheck32"));
let btncheck33 = document.getElementById("btncheck33");
let checked33 = JSON.parse(localStorage.getItem("btncheck33"));
let btncheck34 = document.getElementById("btncheck34");
let checked34 = JSON.parse(localStorage.getItem("btncheck34"));

let selectAllCheck = document.querySelector(".select-all-check");
let selectAllBtn = document.getElementById("select-all-btn");
let runeBtnChecks = document.querySelectorAll(".rune-btn-check");
let runewordsList = document.getElementById("runewords-list");
let runewordsFilter = document.getElementById("runewords-filter");
let nonLadderCheck = document.getElementById("non-ladder-check");

let selectedRunes = [];
let foundRunewords = [];
let helmRunewords = [];
let weaponRunewords = [];
let bodyArmorRunewords = [];
let shieldRunewords = [];
let runewords = [
    {
        name: "Breath of the Dying",
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Vex", "Hel", "El", "Eld", "Zod", "Eth"],
        level: 69,
        stats: [
            "50% Chance To Cast Level 20 Poison Nova When You Kill An Enemy",
            "Indestructible",
            "+60% Increased Attack Speed",
            "+350-400% Enhanced Damage",
            "-25% Target Defense",
            "+50 To Attack Rating",
            "+200% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "7% Mana Stolen Per Hit",
            "12-15% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+30 To All Attributes",
            "+1 To Light Radius",
            "Requirements -20%"
        ],
        ladder: false
    },
    {
        name: "Pride",
        bases: "Polearms",
        type: ["weapons"],
        runes: ["Cham", "Sur", "Io", "Lo"],
        level: 67,
        stats: [
            "25% Chance To Cast Level 17 Fire Wall When Struck",
            "Level 16-20 Concentration Aura When Equipped",
            "260-300% Bonus To Attack Rating",
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
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Sur", "Cham", "Amn", "Lo"],
        level: 67,
        stats: [
            "100% Chance To Cast Level 36 Blaze When You Level-Up",
            "100% Chance To Cast Level 48 Meteor When You Die",
            "Level 16 Holy Fire Aura When Equipped",
            "+33% Increased Attack Speed",
            "+280-330% Enhanced Damage",
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
        bases: "Axes/Polearms/Hammers",
        type: ["weapons"],
        runes: ["Hel", "Ohm", "Um", "Lo", "Cham"],
        level: 67,
        stats: [
            "5% Chance To Cast Level 18 Volcano On Striking",
            "Level 12 Holy Freeze Aura When Equipped",
            "+2 To All Skills",
            "+45% Increased Attack Speed",
            "+330-370% Enhanced Damage",
            "-(40-60)% To Enemy Cold Resistance",
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
        bases: "Swords/Hammers/Axes",
        type: ["weapons"],
        runes: ["Jah", "Mal", "Jah", "Sur", "Jah", "Ber"],
        level: 65,
        stats: [
            "6% Chance To Cast Level 11 Fade When Struck",
            "10% Chance To Cast Level 18 Life Tap On Striking",
            "20% Chance To Cast Level 20 Charged Bolt On Attack",
            "Level 17 Might Aura When Equipped",
            "+330-375% Enhanced Damage",
            "Ignore Target's Defense",
            "60-70% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "Hit Blinds Target",
            "+0-49% Chance of Getting Magic Items (Based on Character Level)"
        ],
        ladder: true
    },
    {
        name: "Destruction",
        bases: "Polearms/Swords",
        type: ["weapons"],
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
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Jah", "Ith", "Ber"],
        level: 65,
        stats: [
            "+2 To All Skills",
            "+45% Faster Run/Walk",
            "+1 To Teleport",
            "+750-775 Defense",
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
        bases: "Weapons/Shields",
        type: ["weapons", "shields"],
        runes: ["Vex", "Vex", "Lo", "Jah"],
        level: 65,
        stats: [
            "100% Chance To Cast level 40 Blaze When You Level-up",
            "40% Chance To Cast Level 22 Firestorm On Striking",
            "Level 10-15 Redemption Aura When Equipped",
            "+350-400% Enhanced Damage",
            "-28% To Enemy Fire Resistance",
            "+350-400 Defense Vs. Missile",
            "+15-21 Fire Absorb",
            "Ignores Target's Defense (Weapons Only)",
            "14% Mana Stolen Per Hit (Weapons Only)",
            "20% Deadly Strike (Weapons Only)",
            "+50 To Life (Shields Only)",
            "+5% To Maximum Lightning Resist (Shields Only)",
            "+10% To Maximum Fire Resist (Shields Only)",
        ],
        ladder: true
    },
    {
        name: "Brand",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Jah", "Lo", "Mal", "Gul"],
        level: 65,
        stats: [
            "35% Chance To Cast Level 14 Amplify Damage When Struck",
            "100% Chance To Cast Level 18 Bone Spear On Striking",
            "Fires Explosive Arrows or Bolts",
            "+260-340% Enhanced Damage",
            "Ignore Target's Defense",
            "20% Bonus to Attack Rating",
            "+280-330% Damage To Demons",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "Knockback"
        ],
        ladder: true
    },
    {
        name: "Faith",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Ohm", "Jah", "Lem", "Eld"],
        level: 65,
        stats: [
            "Level 12-15 Fanaticism Aura When Equipped",
            "+1-2 To All Skills",
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
        bases: "Axes/Hammers",
        type: ["weapons"],
        runes: ["Fal", "Ohm", "Ort", "Jah"],
        level: 65,
        stats: [
            "+30% Increased Attack Speed",
            "+320-370% Enhanced Damage",
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
        bases: "Melee Weapons",
        type: ["weapons"],
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
        bases: "Helms/Shields",
        type: ["helms", "shields"],
        runes: ["Io", "Jah", "Pul"],
        level: 65,
        stats: [
            "10% Chance To Cast Level 15 Confuse When Struck",
            "Level 15 Holy Shock Aura When Equipped",
            "+20-30% Faster Hit Recovery",
            "+30% Enhanced Defense",
            "+150-220 Defense",
            "+10 To Vitality",
            "Increase Maximum Life 5% (Helms Only)",
            "+50 To Life (Shields Only)",
            "+0-61 To Mana (Based On Character Level)",
            "All Resistances +5-20",
            "12-25% Better Chance of Getting Magic Items"
        ],
        ladder: true
    },
    {
        name: "Ice",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Amn", "Shael", "Jah", "Lo"],
        level: 65,
        stats: [
            "100% Chance To Cast Level 40 Blizzard When You Level-up",
            "25% Chance To Cast Level 22 Frost Nova On Striking",
            "Level 18 Holy Freeze Aura When Equipped",
            "+20% Increased Attack Speed",
            "+140-210% Enhanced Damage",
            "Ignore Target's Defense",
            "+25-30% To Cold Skill Damage",
            "7% Life Stolen Per Hit",
            "-20% To Enemy Cold Resistance",
            "20% Deadly Strike",
            "3-309 Extra Gold From Monsters (Based on Character Level)"
        ],
        ladder: true
    },
    {
        name: "Eternity",
        bases: "Melee Weapons",
        type: ["weapons"],
        runes: ["Amn", "Ber", "Ist", "Sol", "Sur"],
        level: 63,
        stats: [
            "Indestructible",
            "+260-310% Enhanced Damage",
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
        bases: "Polearms",
        type: ["weapons"],
        runes: ["Ber", "Mal", "Ber", "Ist"],
        level: 63,
        stats: [
            "50% Chance To Cast Level 20 Chain Lightning When You Kill An Enemy",
            "Level 12 Conviction Aura When Equipped",
            "+35% Faster Run/Walk",
            "+255-325% Enhanced Damage",
            "-(45-55)% To Enemy Lightning Resistance",
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
        bases: "Body Armor",
        type: ["body armor"],
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
        name: "Beast",
        bases: "Axes/Scepters/Hammers",
        type: ["weapons"],
        runes: ["Ber", "Tir", "Um", "Mal", "Lum"],
        level: 63,
        stats: [
            "Level 9 Fanaticism Aura When Equipped",
            "+40% Increased Attack Speed",
            "+240-270% Enhanced Damage",
            "20% Chance of Crushing Blow",
            "25% Chance of Open Wounds",
            "+3 To Werebear",
            "+3 To Lycanthropy",
            "Prevent Monster Heal",
            "+25-40 To Strength",
            "+10 To Energy",
            "+2 To Mana After Each Kill",
            "Level 13 Summon Grizzly (5 Charges)"
        ],
        ladder: false
    },
    {
        name: "Wrath",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Pul", "Lum", "Ber", "Mal"],
        level: 63,
        stats: [
            "30% Chance To Cast Level 1 Decrepify On Striking",
            "5% Chance To Cast Level 10 Life Tap On Striking",
            "+375% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "+250-300% Damage To Undead",
            "Adds 85-120 Magic Damage",
            "Adds 41-240 Lightning Damage",
            "20% Chance of Crushing Blow",
            "Prevent Monster Heal",
            "+10 To Energy",
            "Cannot Be Frozen"
        ],
        ladder: true
    },
    {
        name: "Dragon",
        bases: "Body Armor/Shields",
        type: ["body armor", "shields"],
        runes: ["Sur", "Lo", "Sol"],
        level: 61,
        stats: [
            "20% Chance to Cast Level 18 Venom When Struck",
            "12% Chance To Cast Level 15 Hydra On Striking",
            "Level 14 Holy Fire Aura When Equipped",
            "+360 Defense",
            "+230 Defense Vs. Missile",
            "+3-5 To All Attributes",
            "+0-37 To Strength (Based on Character Level)",
            "Increase Maximum Mana 5% (Armor Only)",
            "+50 To Mana (Shields Only)",
            "+5% To Maximum Lightning Resist",
            "Damage Reduced by 7"
        ],
        ladder: true
    },
    {
        name: "Bramble",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Ral", "Ohm", "Sur", "Eth"],
        level: 61,
        stats: [
            "Level 15-21 Thorns Aura When Equipped",
            "+50% Faster Hit Recovery",
            "+25-50% To Poison Skill Damage",
            "+300 Defense",
            "Increase Maximum Mana 5%",
            "Regenerate Mana 15%",
            "+5% To Maximum Cold Resist",
            "Fire Resist +30%",
            "Poison Resist +100%",
            "+13 Life After Each Kill",
            "Level 13 Spirit of Barbs (33 Charges)"
        ],
        ladder: false
    },
    {
        name: "Wind",
        bases: "Melee Weapons",
        type: ["weapons"],
        runes: ["Sur", "El"],
        level: 61,
        stats: [
            "10% Chance To Cast Level 9 Tornado On Striking",
            "+20% Faster Run/Walk",
            "+40% Increased Attack Speed",
            "+15% Faster Hit Recovery",
            "+120-160% Enhanced Damage",
            "-50% Target Defense",
            "+50 To Attack Rating",
            "Hit Blinds Target",
            "+1 To Light Radius",
            "Level 13 Twister (127 Charges)"
        ],
        ladder: false
    },
    {
        name: "Grief",
        bases: "Swords/Axes",
        type: ["weapons"],
        runes: ["Eth", "Tir", "Lo", "Mal", "Ral"],
        level: 59,
        stats: [
            "35% Chance To Cast Level 15 Venom On Striking",
            "+30-40% Increased Attack Speed",
            "Damage +340-400",
            "Ignore Target's Defense",
            "-25% Target Defense",
            "+1-185% Damage To Demons (Based on Character Level)",
            "Adds 5-30 Fire Damage",
            "-20-25% To Enemy Poison Resistance",
            "20% Deadly Strike",
            "Prevent Monster Heal",
            "+2 To Mana After Each Kill",
            "+10-15 Life After Each Kill"
        ],
        ladder: true
    },
    {
        name: "Fortitude",
        bases: "Weapons/Body Armor",
        type: ["weapons", "body armor"],
        runes: ["El", "Sol", "Dol", "Lo"],
        level: 59,
        stats: [
            "20% Chance To Cast Level 15 Chilling Armor when Struck",
            "+25% Faster Cast Rate",
            "+300% Enhanced Damage",
            "+200% Enhanced Defense",
            "+X To Life (Based on Character Level)",
            "All Resistances +25-30",
            "12% Damage Taken Goes To Mana",
            "+1 To Light Radius",
            "+9 To Minimum Damage (Weapons Only)",
            "+50 To Attack Rating (Weapons Only)",
            "20% Deadly Strike (Weapons Only)",
            "Hit Causes Monster To Flee 25% (Weapons Only)",
            "+15 Defense (Body Armor Only)",
            "Replenish Life +7 (Body Armor Only)",
            "+5% To Maximum Lightning Resist (Body Armor Only)",
            "Damage Reduced By 7 (Body Armor Only)"
        ],
        ladder: true
    },
    {
        name: "Oath",
        bases: "Swords/Axes/Maces",
        type: ["weapons"],
        runes: ["Shael", "Pul", "Mal", "Lum"],
        level: 59,
        stats: [
            "Indestructible",
            "30% Chance To Cast Level 20 Bone Spirit On Striking",
            "+50% Increased Attack Speed",
            "+210-340% Enhanced Damage",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "Prevent Monster Heal",
            "+10 To Energy",
            "+10-15 Magic Absorb",
            "Level 16 Heart Of Wolverine (20 Charges)",
            "Level 17 Iron Golem (14 Charges)"
        ],
        ladder: true
    },
    {
        name: "Exile",
        bases: "Paladin Shields",
        type: ["shields"],
        runes: ["Vex", "Ohm", "Ist", "Dol"],
        level: 57,
        stats: [
            "15% Chance To Cast Level 5 Life Tap On Striking",
            "Level 13-16 Defiance Aura When Equipped",
            "+2 To Offensive Auras (Paladin Only)",
            "+30% Faster Block Rate",
            "Freezes Target",
            "+220-260% Enhanced Defense",
            "Replenish Life +7",
            "+5% To Maximum Cold Resist",
            "+5% To Maximum Fire Resist",
            "25% Better Chance Of Getting Magic Items",
            "Repairs 1 Durability in 4 Seconds"
        ],
        ladder: false
    },
    {
        name: "Call To Arms",
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Dol", "Um", "Ber", "Ist"],
        level: 57,
        stats: [
            "+1 To All Skills",
            "+40% Increased Attack Speed",
            "+250-290% Enhanced Damage",
            "Adds 5-30 Fire Damage",
            "7% Life Stolen Per Hit",
            "+2-6 To Battle Command",
            "+1-6 To Battle Orders",
            "+1-4 To Battle Cry",
            "Prevent Monster Heal",
            "Replenish Life +12",
            "30% Better Chance of Getting Magic Items"
        ],
        ladder: false
    },
    {
        name: "Chaos",
        bases: "Claws",
        type: ["weapons"],
        runes: ["Fal", "Ohm", "Um"],
        level: 57,
        stats: [
            "9% Chance To Cast Level 11 Frozen Orb On Striking",
            "11% Chance To Cast Level 9 Charged Bolt On Striking",
            "+35% Increased Attack Speed",
            "+290-340% Enhanced Damage",
            "Adds 216-471 Magic Damage",
            "25% Chance of Open Wounds",
            "+1 To Whirlwind",
            "+10 To Strength",
            "+15 Life After Each Demon Kill"
        ],
        ladder: false
    },
    {
        name: "Death",
        bases: "Swords/Axes",
        type: ["weapons"],
        runes: ["Hel", "El", "Vex", "Ort", "Gul"],
        level: 55,
        stats: [
            "Indestructible",
            "100% Chance To Cast Level 44 Chain Lightning When You Die",
            "25% Chance To Cast Level 18 Glacial Spike On Attack",
            "+300-385% Enhanced Damage",
            "20% Bonus To Attack Rating",
            "+50 To Attack Rating",
            "Adds 1-50 Lightning Damage",
            "7% Mana Stolen Per Hit",
            "50% Chance of Crushing Blow",
            "+0-49% Deadly Strike (Based on Character Level)",
            "+1 To Light Radius",
            "Level 22 Blood Golem (15 Charges)",
            "Requirements -20%"
        ],
        ladder: true
    },
    {
        name: "Silence",
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Dol", "Eld", "Hel", "Ist", "Tir", "Vex"],
        level: 55,
        stats: [
            "+2 To All Skills",
            "20% Increased Attack Speed",
            "20% Faster Hit Recovery",
            "200% Enhanced Damage",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "11% Mana Stolen Per Hit",
            "Hit Blinds Target +33",
            "Hit Causes Monster To Flee 25%",
            "All Resistances +75",
            "+2 To Mana After Each Kill",
            "30% Better Chance Of Getting Magic Items",
            "Requirements -20%"
        ],
        ladder: false
    },
    {
        name: "Heart of the Oak",
        bases: "Staves/Maces",
        type: ["weapons"],
        runes: ["Ko", "Vex", "Pul", "Thul"],
        level: 55,
        stats: [
            "+3 To All Skills",
            "+40% Faster Cast Rate",
            "+75% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "Adds 3-14 Cold Damage, 3 sec. Duration (Normal)",
            "7% Mana Stolen Per Hit",
            "+10 To Dexterity",
            "Replenish Life +20",
            "Increase Maximum Mana 15%",
            "All Resistances +30-40",
            "Level 4 Oak Sage (25 Charges)",
            "Level 14 Raven (60 Charges)"
        ],
        ladder: false
    },
    {
        name: "Principle",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Ral", "Gul", "Eld"],
        level: 55,
        stats: [
            "100% Chance To Cast Level 5 Holy Bolt On Striking",
            "+2 To Paladin Skill Levels",
            "+50% Damage to Undead",
            "+100-150 To Life",
            "15% Slower Stamina Drain",
            "+5% To Maximum Poison Resist",
            "Fire Resist +30%"
        ],
        ladder: false
    },
    {
        name: "Kingslayer",
        bases: "Swords/Axes",
        type: ["weapons"],
        runes: ["Mal", "Um", "Gul", "Fal"],
        level: 53,
        stats: [
            "+30% Increased Attack Speed",
            "+230-270% Enhanced Damage",
            "-25% Target Defense",
            "20% Bonus To Attack Rating",
            "33% Chance of Crushing Blow",
            "50% Chance of Open Wounds",
            "+1 To Vengeance",
            "Prevent Monster Heal",
            "+10 To Strength",
            "40% Extra Gold From Monsters"
        ],
        ladder: false
    },
    {
        name: "Rift",
        bases: "Polearms/Scepters",
        type: ["weapons"],
        runes: ["Hel", "Ko", "Lem", "Gul"],
        level: 53,
        stats: [
            "20% Chance To Cast Level 16 Tornado On Striking",
            "16% Chance To Cast Level 21 Frozen Orb On Attack",
            "20% Bonus To Attack Rating",
            "Adds 160-250 Magic Damage",
            "Adds 60-180 Fire Damage",
            "+5-10 To All Stats",
            "+10 To Dexterity",
            "38% Damage Taken Goes To Mana",
            "75% Extra Gold From Monsters",
            "Level 15 Iron Maiden (40 Charges)",
            "Requirements -20%"
        ],
        ladder: true
    },
    {
        name: "Delirium",
        bases: "Helms",
        type: ["helms"],
        runes: ["Lem", "Ist", "Io"],
        level: 51,
        stats: [
            "1% Chance To Cast Level 50 Delirium When Struck",
            "6% Chance To Cast Level 14 Mind Blast When Struck",
            "14% Chance To Cast Level 13 Terror When Struck",
            "11% Chance To Cast Level 18 Confuse On Striking",
            "+2 To All Skills",
            "+261 Defense",
            "+10 To Vitality",
            "50% Extra Gold From Monsters",
            "25% Better Chance of Getting Magic Items",
            "Level 17 Attract (60 Charges)"
        ],
        ladder: false
    },
    {
        name: "Sanctuary",
        bases: "Shields",
        type: ["shields"],
        runes: ["Ko", "Ko", "Mal"],
        level: 49,
        stats: [
            "+20% Faster Hit Recovery",
            "+20% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "+130-160% Enhanced Defense",
            "+250 Defense vs. Missile",
            "+20 To Dexterity",
            "All Resistances +50-70",
            "Magic Damage Reduced By 7",
            "Level 12 Slow Missiles (60 Charges)"
        ],
        ladder: false
    },
    {
        name: "Venom",
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Tal", "Dol", "Mal"],
        level: 49,
        stats: [
            "Ignore Target's Defense",
            "+273 Poison Damage Over 6 seconds",
            "7% Mana Stolen Per Hit",
            "Prevent Monster Heal",
            "Hit Causes Monster To Flee 25%",
            "Level 13 Poison Nova (11 Charges)",
            "Level 15 Poison Explosion (27 Charges)"
        ],
        ladder: false
    },
    {
        name: "Rain",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Ort", "Mal", "Ith"],
        level: 49,
        stats: [
            "5% Chance To Cast Level 15 Cyclone Armor When Struck",
            "5% Chance To Cast Level 15 Twister On Striking",
            "+2 To Druid Skills",
            "+100-150 To Mana",
            "Lightning Resist +30%",
            "Magic Damage Reduced By 7",
            "15% Damage Taken Goes to Mana"
        ],
        ladder: false
    },
    {
        name: "Prudence",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Mal", "Tir"],
        level: 49,
        stats: [
            "+25% Faster Hit Recovery",
            "+140-170% Enhanced Defense",
            "All Resistances +25-35",
            "Damage Reduced by 3",
            "Magic Damage Reduced by 17",
            "+2 To Mana After Each Kill",
            "+1 To Light Radius",
            "Repairs Durability 1 In 4 Seconds"
        ],
        ladder: false
    },
    {
        name: "Bone",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Sol", "Um", "Um"],
        level: 47,
        stats: [
            "15% Chance To Cast level 10 Bone Armor When Struck",
            "15% Chance To Cast level 10 Bone Spear On Striking",
            "+2 To Necromancer Skill Levels",
            "+100-150 To Mana",
            "All Resistances +30",
            "Damage Reduced By 7"
        ],
        ladder: false
    },
    {
        name: "Gloom",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Fal", "Um", "Pul"],
        level: 47,
        stats: [
            "15% Chance To Cast Level 3 Dim Vision When Struck",
            "+10% Faster Hit Recovery",
            "+200-260% Enhanced Defense",
            "+10 To Strength",
            "All Resistances +45",
            "Half Freeze Duration",
            "5% Damage Taken Goes To Mana",
            "-3 To Light Radius"
        ],
        ladder: false
    },
    {
        name: "Stone",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Shael", "Um", "Pul", "Lum"],
        level: 47,
        stats: [
            "+60% Faster Hit Recovery",
            "+250-290% Enhanced Defense",
            "+300 Defense Vs. Missile",
            "+16 To Strength",
            "+16 To Vitality",
            "+10 To Energy",
            "All Resistances +15",
            "Level 16 Molten Boulder (80 Charges)",
            "Level 16 Clay Golem (16 Charges)"
        ],
        ladder: false
    },
    {
        name: "Duress",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Shael", "Um", "Thul"],
        level: 47,
        stats: [
            "+40% Faster Hit Recovery",
            "+10-20% Enhanced Damage",
            "Adds 37-133 Cold Damage 2 sec. Duration (Normal)",
            "15% Chance of Crushing Blow",
            "33% Chance of Open Wounds",
            "+150-200% Enhanced Defense",
            "-20% Slower Stamina Drain",
            "Cold Resist +45%",
            "Lightning Resist +15%",
            "Fire Resist +15%",
            "Poison Resist +15%"
        ],
        ladder: false
    },
    {
        name: "Crescent Moon",
        bases: "Axes/Swords/Polearms",
        type: ["weapons"],
        runes: ["Shael", "Um", "Tir"],
        level: 47,
        stats: [
            "10% Chance To Cast Level 17 Chain Lightning On Striking",
            "7% Chance To Cast Level 13 Static Field On Striking",
            "+20% Increased Attack Speed",
            "+180-220% Enhanced Damage",
            "Ignore Target's Defense",
            "-35% To Enemy Lightning Resistance",
            "25% Chance of Open Wounds",
            "+9-11 Magic Absorb",
            "+2 To Mana After Each Kill",
            "Level 18 Summon Spirit Wolf (30 Charges)"
        ],
        ladder: false
    },
    {
        name: "Enlightenment",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Pul", "Ral", "Sol"],
        level: 45,
        stats: [
            "5% Chance To Cast Level 15 Blaze When Struck",
            "5% Chance To Cast level 15 Fire Ball On Striking",
            "+2 To Sorceress Skill Levels",
            "+1 To Warmth",
            "+30% Enhanced Defense",
            "Fire Resist +30%",
            "Damage Reduced By 7"
        ],
        ladder: false
    },
    {
        name: "Lawbringer",
        bases: "Swords/Hammers/Scepters",
        type: ["weapons"],
        runes: ["Amn", "Lem", "Ko"],
        level: 43,
        stats: [
            "20% Chance To Cast Level 15 Decrepify On Striking",
            "Level 16-18 Sanctuary Aura When Equipped",
            "-50% Target Defense",
            "Adds 150-210 Fire Damage",
            "Adds 130-180 Cold Damage",
            "7% Life Stolen Per Hit",
            "Slain Monsters Rest In Peace",
            "+200-250 Defense Vs. Missile",
            "+10 To Dexterity",
            "75% Extra Gold From Monsters"
        ],
        ladder: true
    },
    {
        name: "Wealth",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Lem", "Ko", "Tir"],
        level: 43,
        stats: [
            "+10 To Dexterity",
            "+2 To Mana After Each Kill",
            "300% Extra Gold From Monsters",
            "100% Better Chance Of Getting Magic Items"
        ],
        ladder: false
    },
    {
        name: "Voice of Reason",
        bases: "Swords/Maces",
        type: ["weapons"],
        runes: ["Lem", "Ko", "El", "Eld"],
        level: 43,
        stats: [
            "15% Chance To Cast Level 13 Frozen Orb On Striking",
            "18% Chance To Cast Level 20 Ice Blast On Striking",
            "+50 To Attack Rating",
            "+220-350% Damage To Demons",
            "+355-375% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "Adds 100-220 Cold Damage",
            "-24% To Enemy Cold Resistance",
            "+10 To Dexterity",
            "Cannot Be Frozen",
            "75% Extra Gold From Monsters",
            "+1 To Light Radius"
        ],
        ladder: true
    },
    {
        name: "Passion",
        bases: "Weapons",
        type: ["weapons"],
        runes: ["Dol", "Ort", "Eld", "Lem"],
        level: 43,
        stats: [
            "+25% Increased Attack Speed",
            "+160-210% Enhanced Damage",
            "50-80% Bonus To Attack Rating",
            "+75% Damage To Undead",
            "+50 To Attack Rating Against Undead",
            "Adds 1-50 Lightning Damage",
            "+1 To Berserk",
            "+1 To Zeal",
            "Hit Blinds Target +10",
            "Hit Causes Monster To Flee 25%",
            "75% Extra Gold From Monsters",
            "Level 3 Heart of Wolverine (12 Charges)"
        ],
        ladder: false
    },
    {
        name: "Treachery",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Shael", "Thul", "Lem"],
        level: 43,
        stats: [
            "5% Chance To Cast Level 15 Fade When Struck",
            "25% Chance To Cast level 15 Venom On Striking",
            "+2 To Assassin Skills",
            "+45% Increased Attack Speed",
            "+20% Faster Hit Recovery",
            "Cold Resist +30%",
            "50% Extra Gold From Monsters"
        ],
        ladder: false
    },
    {
        name: "Obedience",
        bases: "Polearms",
        type: ["weapons"],
        runes: ["Hel", "Ko", "Thul", "Eth", "Fal"],
        level: 41,
        stats: [
            "30% Chance To Cast Level 21 Enchant When You Kill An Enemy",
            "40% Faster Hit Recovery",
            "+370% Enhanced Damage",
            "-25% Target Defense",
            "Adds 3-14 Cold Damage",
            "-25% To Enemy Fire Resistance",
            "40% Chance of Crushing Blow",
            "+200-300 Defense",
            "+10 To Strength",
            "+10 To Dexterity",
            "All Resistances +20-30",
            "Requirements -20%"
        ],
        ladder: true
    },
    {
        name: "Lionheart",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Hel", "Lum", "Fal"],
        level: 41,
        stats: [
            "+20% Enhanced Damage",
            "+25 To Strength",
            "+15 To Dexterity",
            "+20 To Vitality",
            "+10 To Energy",
            "+50 To Life",
            "All Resistances +30",
            "Requirements -15%"
        ],
        ladder: false
    },
    {
        name: "Melody",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Shael", "Ko", "Nef"],
        level: 39,
        stats: [
            "+3 To Bow and Crossbow Skills (Amazon Only)",
            "+50% Enhanced Damage",
            "+300% Damage To Undead",
            "+3 To Slow Missiles (Amazon Only)",
            "+3 To Dodge (Amazon Only)",
            "+3 To Critical Strike (Amazon Only)",
            "20% Increased Attack Speed",
            "Knockback",
            "+10 To Dexterity"
        ],
        ladder: false
    },
    {
        name: "Harmony",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Tir", "Ith", "Sol", "Ko"],
        level: 39,
        stats: [
            "Level 10 Vigor Aura When Equipped",
            "+200-275% Enhanced Damage",
            "+9 To Minimum Damage",
            "+9 To Maximum Damage",
            "Adds 55-160 Fire Damage",
            "Adds 55-160 Lightning Damage",
            "Adds 55-160 Cold Damage",
            "+2-6 To Valkyrie",
            "+10 To Dexterity",
            "Regenerate Mana 20%",
            "+2 To Mana After Each Kill",
            "+2 To Light Radius",
            "Level 20 Revive (25 Charges)"
        ],
        ladder: true
    },
    {
        name: "Memory",
        bases: "Staves",
        type: ["weapons"],
        runes: ["Lum", "Io", "Sol", "Eth"],
        level: 37,
        stats: [
            "+3 to Sorceress Skill Levels",
            "33% Faster Cast Rate",
            "+9 To Minimum Damage",
            "-25% Target Defense",
            "+3 Energy Shield (Sorceress Only)",
            "+2 Static Field (Sorceress Only)",
            "+50% Enhanced Defense",
            "+10 To Vitality",
            "+10 To Energy",
            "Increase Maximum Mana 20%",
            "Magic Damage Reduced By 7"
        ],
        ladder: false
    },
    {
        name: "Splendor",
        bases: "Shields",
        type: ["shields"],
        runes: ["Eth", "Lum"],
        level: 37,
        stats: [
            "+1 To All Skills",
            "+10% Faster Cast Rate",
            "+20% Faster Block Rate",
            "+60-100% Enhanced Defense",
            "+10 To Energy",
            "Regenerate Mana 15%",
            "50% Extra Gold From Monsters",
            "20% Better Chance of Getting Magic Items",
            "+3 To Light Radius"
        ],
        ladder: false
    },
    {
        name: "Smoke",
        bases: "Shields",
        type: ["shields"],
        runes: ["Nef", "Lum"],
        level: 37,
        stats: [
            "20% Faster Hit Recovery",
            "+75% Enhanced Defense",
            "+280 Defense Vs. Missile",
            "+10 To Energy",
            "All Resistances +50",
            "-1 To Light Radius",
            "Level 6 Weaken (18 Charges)"
        ],
        ladder: false
    },
    {
        name: "White",
        bases: "Wand",
        type: ["weapons"],
        runes: ["Dol", "Io"],
        level: 35,
        stats: [
            "+3 To Poison And Bone Skills (Necromancer Only)",
            "20% Faster Cast Rate",
            "+2 To Bone Spear (Necromancer Only)",
            "+4 To Skeleton Mastery (Necromancer Only)",
            "+3 To Bone Armor (Necromancer Only)",
            "Hit Causes Monster To Flee 25%",
            "+10 To Vitality",
            "+13 To Mana",
            "Magic Damage Reduced By 4"
        ],
        ladder: false
    },
    {
        name: "Black",
        bases: "Clubs/Hammers/Maces",
        type: ["weapons"],
        runes: ["Thul", "Io", "Nef"],
        level: 35,
        stats: [
            "15% Increased Attack Speed",
            "+120% Enhanced Damage",
            "+200 To Attack Rating",
            "Adds 3-14 Cold Damage",
            "40% Chance Of Crushing Blow",
            "Knockback",
            "+10 To Vitality",
            "Magic Damage Reduced By 2",
            "Level 4 Corpse Explosion (12 Charges)"
        ],
        ladder: false
    },
    {
        name: "Peace",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Shael", "Thul", "Amn"],
        level: 29,
        stats: [
            "4% Chance To Cast Level 5 Slow Missiles When Struck",
            "2% Chance To Cast level 15 Valkyrie On Striking",
            "+2 To Amazon Skill Levels",
            "+20% Faster Hit Recovery",
            "+2 To Critical Strike",
            "Cold Resist +30%",
            "Attacker Takes Damage of 14"
        ],
        ladder: false
    },
    {
        name: "Rhyme",
        bases: "Shields",
        type: ["shields"],
        runes: ["Shael", "Eth"],
        level: 29,
        stats: [
            "40% Faster Block Rate",
            "20% Increased Chance of Blocking",
            "Regenerate Mana 15%",
            "All Resistances +25",
            "Cannot Be Frozen",
            "50% Extra Gold From Monsters",
            "25% Better Chance Of Getting Magic Items"
        ],
        ladder: false
    },
    {
        name: "Honor",
        bases: "Melee Weapons",
        type: ["weapons"],
        runes: ["Amn", "El", "Ith", "Tir", "Sol"],
        level: 27,
        stats: [
            "+1 to All Skills",
            "+160% Enhanced Damage",
            "+9 To Minimum Damage",
            "+9 To Maximum Damage",
            "+250 To Attack Rating",
            "7% Life Stolen Per Hit",
            "25% Deadly Strike",
            "+10 To Strength",
            "Replenish Life +10",
            "+2 To Mana After Each Kill",
            "+1 To Light Radius"
        ],
        ladder: false
    },
    {
        name: "Lore",
        bases: "Helms",
        type: ["helms"],
        runes: ["Ort", "Sol"],
        level: 27,
        stats: [
            "+1 to All Skills",
            "+10 To Energy",
            "Lightning Resist +30%",
            "Damage Reduced By 7",
            "+2 To Mana After Each Kill",
            "+2 To Light Radius"
        ],
        ladder: false
    },
    {
        name: "Insight",
        bases: "Polearms/Staves",
        type: ["weapons"],
        runes: ["Ral", "Tir", "Tal", "Sol"],
        level: 27,
        stats: [
            "Level 12-17 Meditation Aura When Equipped",
            "+35% Faster Cast Rate",
            "+200-260% Enhanced Damage",
            "+9 To Minimum Damage",
            "180-250% Bonus to Attack Rating",
            "Adds 5-30 Fire Damage",
            "+75 Poison Damage Over 5 Seconds",
            "+1-6 To Critical Strike",
            "+5 To All Attributes",
            "+2 To Mana After Each Kill",
            "23% Better Chance of Getting Magic Items"
        ],
        ladder: true
    },
    {
        name: "Radiance",
        bases: "Helms",
        type: ["helms"],
        runes: ["Nef", "Sol", "Ith"],
        level: 27,
        stats: [
            "+75% Enhanced Defense",
            "+30 Defense Vs. Missile",
            "+10 To Vitality",
            "+10 To Energy",
            "+33 To Mana",
            "Damage Reduced By 7",
            "Magic Damage Reduced By 3",
            "15% Damage Goes To Mana",
            "+5 To Light Radius"
        ],
        ladder: false
    },
    {
        name: "Myth",
        bases: "Body Armor",
        type: ["body armor"],
        runes: ["Hel", "Amn", "Nef"],
        level: 25,
        stats: [
            "3% Chance To Cast Level 1 Howl When Struck",
            "10% Chance To Cast Level 1 Taunt On Striking",
            "+2 To Barbarian Skill Levels",
            "+30 Defense Vs. Missile",
            "Replenish Life +10",
            "Attacker Takes Damage of 14",
            "Requirements -15%"
        ],
        ladder: false
    },
    {
        name: "Spirit",
        bases: "Swords/Shields",
        type: ["weapons", "shields"],
        runes: ["Tal", "Thul", "Ort", "Amn"],
        level: 25,
        stats: [
            "+2 To All Skills",
            "+25-35% Faster Cast Rate",
            "+55% Faster Hit Recovery",
            "+250 Defense Vs. Missile",
            "+22 To Vitality",
            "+89-112 To Mana",
            "+3-8 Magic Absorb",
            "Adds 1-50 Lightning Damage (Weapons Only)",
            "Adds 3-14 Cold Damage (Weapons Only)",
            "+75 Poison Damage Over 5 Seconds (Weapons Only)",
            "7% Life Stolen Per Hit (Weapons Only)",
            "Cold Resist +35% (Shields Only)",
            "Lightning Resist +35% (Shields Only)",
            "Poison Resist +35% (Shields Only)",
            "Attacker Takes Damage of 14 (Shields Only)"
        ],
        ladder: true
    },
    {
        name: "King's Grace",
        bases: "Swords/Scepters",
        type: ["weapons"],
        runes: ["Amn", "Ral", "Thul"],
        level: 25,
        stats: [
            "+100% Enhanced Damage",
            "+150 To Attack Rating",
            "+100% Damage To Demons",
            "+100 To Attack Rating Against Demons",
            "+50% Damage To Undead",
            "+100 To Attack Rating Against Undead",
            "Adds 5-30 Fire Damage",
            "Adds 3-14 Cold Damage",
            "7% Life Stolen Per Hit"
        ],
        ladder: false
    },
    {
        name: "Edge",
        bases: "Missile Weapons",
        type: ["weapons"],
        runes: ["Tir", "Tal", "Amn"],
        level: 25,
        stats: [
            "Level 15 Thorns Aura When Equipped",
            "+35% Increased Attack Speed",
            "+320-380% Damage To Demons",
            "+280% Damage To Undead",
            "+75 Poison Damage Over 5 Seconds",
            "7% Life Stolen Per Hit",
            "Prevent Monster Heal",
            "+5-10 To All Attributes",
            "+2 To Mana After Each Kill",
            "Reduces All Vendor Prices 15%"
        ],
        ladder: true
    },
    {
        name: "Strength",
        bases: "Melee Weapons",
        type: ["weapons"],
        runes: ["Amn", "Tir"],
        level: 25,
        stats: [
            "35% Enhanced Damage",
            "7% Life Stolen Per Hit",
            "25% Chance Of Crushing Blow",
            "+20 To Strength",
            "+10 To Vitality",
            "+2 To Mana After Each Kill"
        ],
        ladder: false
    },
    {
        name: "Holy Thunder",
        bases: "Scepters",
        type: ["weapons"],
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
        bases: "Shields",
        type: ["shields"],
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
        bases: "Missile Weapons",
        type: ["weapons"],
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
        bases: "Staves",
        type: ["weapons"],
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
        bases: "Body Armor",
        type: ["body armor"],
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
        bases: "Melee Weapons",
        type: ["weapons"],
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
        bases: "Helms",
        type: ["helms"],
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
        bases: "Swords/Axes/Maces",
        type: ["weapons"],
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
];

function selectAllRunes(source) {
    for (let i = 0; i < runeBtnChecks.length; i++) {
        if (runeBtnChecks[i] != source) {
            runeBtnChecks[i].checked = source.checked;
        }
    }
    if (selectAllCheck.checked) {
        selectAllBtn.innerText = "SELECT NONE";
    } else {
        selectAllBtn.innerText = "SELECT ALL";
    }
}

function removeAllRunes(array, elem) {
    let index = array.indexOf(elem);
    while (index > -1) {
        array.splice(index, 1);
        index = array.indexOf(elem);
    }
}

function searchRunewords() {
    foundRunewords = [];

    /*Adds selected runes to an array and removes unselected runes*/
    runeBtnChecks.forEach(function (runeBtnCheck) {
        if (runeBtnCheck.checked) {
            selectedRunes.push(runeBtnCheck.value);
        } else {
            removeAllRunes(selectedRunes, runeBtnCheck.value)
        }
    })

    /*Removes duplicates from the array of selected runes*/
    let selectedRunesNoDupes = selectedRunes.filter(function (selectedRune, index) {
        return selectedRunes.indexOf(selectedRune) === index;
    })

    /*Finds all runewords that contain selected runes*/
    for (let i = 0; i < runewords.length; i++) {
        if (runewords[i].runes.every(rune => selectedRunesNoDupes.includes(rune))) {
            foundRunewords.push(runewords[i]);

            let runewordName = document.createElement("h2");
            let runewordBases = document.createElement("div");
            runewordBases.style.opacity = "0.33";
            let runewordRunes = document.createElement("div");
            runewordRunes.style.color = "#b4a372";
            let runewordLevel = document.createElement("div");
            let runewordStats = document.createElement("div");
            runewordStats.style.color = "#595ed8";
            runewordStats.style.fontSize = ".75rem";

            let runewordNameCaps = runewords[i].name.toUpperCase();
            let runewordBasesCaps = runewords[i].bases.toUpperCase();
            let runewordRunesString = runewords[i].runes.join(" + ");
            let runewordRunesCaps = runewordRunesString.toUpperCase();
            let runewordStatsString = runewords[i].stats.join("\n");
            let runewordStatsCaps = runewordStatsString.toUpperCase();

            runewordName.innerText = runewordNameCaps;
            runewordBases.innerText = runewordBasesCaps;
            runewordRunes.innerText = runewordRunesCaps;
            runewordLevel.innerText = "REQUIRED LEVEL: " + runewords[i].level;
            runewordStats.innerText = runewordStatsCaps;

            runewordsList.appendChild(runewordName);
            runewordsList.appendChild(runewordBases);
            runewordsList.appendChild(runewordRunes);
            runewordsList.appendChild(runewordLevel);
            runewordsList.appendChild(runewordStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }

    if (foundRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }
}

function filterHelms() {
    helmRunewords = [];
    runewordsList.innerHTML = "";

    for (let i = 0; i < foundRunewords.length; i++) {
        if (foundRunewords[i].type.includes("helms")) {
            helmRunewords.push(foundRunewords[i]);
        }
    }

    if (helmRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }

    if (nonLadderCheck.checked) {
        for (let h = 0; h < helmRunewords.length; h++) {
            if (helmRunewords[h].ladder === false) {
                let helmNlName = document.createElement("h2");
                let helmNlBases = document.createElement("div");
                helmNlBases.style.opacity = "0.33";
                let helmNlRunes = document.createElement("div");
                helmNlRunes.style.color = "#b4a372";
                let helmNlLevel = document.createElement("div");
                let helmNlStats = document.createElement("div");
                helmNlStats.style.color = "#595ed8";
                helmNlStats.style.fontSize = ".75rem";

                let helmNlNameCaps = helmRunewords[h].name.toUpperCase();
                let helmNlBasesCaps = helmRunewords[h].bases.toUpperCase();
                let helmNlRunesString = helmRunewords[h].runes.join(" + ");
                let helmNlRunesCaps = helmNlRunesString.toUpperCase();
                let helmNlStatsString = helmRunewords[h].stats.join("\n");
                let helmNlStatsCaps = helmNlStatsString.toUpperCase();

                helmNlName.innerText = helmNlNameCaps;
                helmNlBases.innerText = helmNlBasesCaps;
                helmNlRunes.innerText = helmNlRunesCaps;
                helmNlLevel.innerText = "REQUIRED LEVEL: " + helmRunewords[h].level;
                helmNlStats.innerText = helmNlStatsCaps;

                runewordsList.appendChild(helmNlName);
                runewordsList.appendChild(helmNlBases);
                runewordsList.appendChild(helmNlRunes);
                runewordsList.appendChild(helmNlLevel);
                runewordsList.appendChild(helmNlStats);
                runewordsList.appendChild(document.createElement("br"));
            }
        }
    } else {
        for (let h = 0; h < helmRunewords.length; h++) {
            let helmName = document.createElement("h2");
            let helmBases = document.createElement("div");
            helmBases.style.opacity = "0.33";
            let helmRunes = document.createElement("div");
            helmRunes.style.color = "#b4a372";
            let helmLevel = document.createElement("div");
            let helmStats = document.createElement("div");
            helmStats.style.color = "#595ed8";
            helmStats.style.fontSize = ".75rem";

            let helmNameCaps = helmRunewords[h].name.toUpperCase();
            let helmBasesCaps = helmRunewords[h].bases.toUpperCase();
            let helmRunesString = helmRunewords[h].runes.join(" + ");
            let helmRunesCaps = helmRunesString.toUpperCase();
            let helmStatsString = helmRunewords[h].stats.join("\n");
            let helmStatsCaps = helmStatsString.toUpperCase();

            helmName.innerText = helmNameCaps;
            helmBases.innerText = helmBasesCaps;
            helmRunes.innerText = helmRunesCaps;
            helmLevel.innerText = "REQUIRED LEVEL: " + helmRunewords[h].level;
            helmStats.innerText = helmStatsCaps;

            runewordsList.appendChild(helmName);
            runewordsList.appendChild(helmBases);
            runewordsList.appendChild(helmRunes);
            runewordsList.appendChild(helmLevel);
            runewordsList.appendChild(helmStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }
}

function filterWeapons() {
    weaponRunewords = [];
    runewordsList.innerHTML = "";

    for (let i = 0; i < foundRunewords.length; i++) {
        if (foundRunewords[i].type.includes("weapons")) {
            weaponRunewords.push(foundRunewords[i]);
        }
    }

    if (weaponRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }

    if (nonLadderCheck.checked) {
        for (let w = 0; w < weaponRunewords.length; w++) {
            if (weaponRunewords[w].ladder === false) {
                let weaponNlName = document.createElement("h2");
                let weaponNlBases = document.createElement("div");
                weaponNlBases.style.opacity = "0.33";
                let weaponNlRunes = document.createElement("div");
                weaponNlRunes.style.color = "#b4a372";
                let weaponNlLevel = document.createElement("div");
                let weaponNlStats = document.createElement("div");
                weaponNlStats.style.color = "#595ed8";
                weaponNlStats.style.fontSize = ".75rem";

                let weaponNlNameCaps = weaponRunewords[w].name.toUpperCase();
                let weaponNlBasesCaps = weaponRunewords[w].bases.toUpperCase();
                let weaponNlRunesString = weaponRunewords[w].runes.join(" + ");
                let weaponNlRunesCaps = weaponNlRunesString.toUpperCase();
                let weaponNlStatsString = weaponRunewords[w].stats.join("\n");
                let weaponNlStatsCaps = weaponNlStatsString.toUpperCase();

                weaponNlName.innerText = weaponNlNameCaps;
                weaponNlBases.innerText = weaponNlBasesCaps;
                weaponNlRunes.innerText = weaponNlRunesCaps;
                weaponNlLevel.innerText = "REQUIRED LEVEL: " + weaponRunewords[w].level;
                weaponNlStats.innerText = weaponNlStatsCaps;

                runewordsList.appendChild(weaponNlName);
                runewordsList.appendChild(weaponNlBases);
                runewordsList.appendChild(weaponNlRunes);
                runewordsList.appendChild(weaponNlLevel);
                runewordsList.appendChild(weaponNlStats);
                runewordsList.appendChild(document.createElement("br"));
            }
        }
    } else {
        for (let w = 0; w < weaponRunewords.length; w++) {
            let weaponName = document.createElement("h2");
            let weaponBases = document.createElement("div");
            weaponBases.style.opacity = "0.33";
            let weaponRunes = document.createElement("div");
            weaponRunes.style.color = "#b4a372";
            let weaponLevel = document.createElement("div");
            let weaponStats = document.createElement("div");
            weaponStats.style.color = "#595ed8";
            weaponStats.style.fontSize = ".75rem";

            let weaponNameCaps = weaponRunewords[w].name.toUpperCase();
            let weaponBasesCaps = weaponRunewords[w].bases.toUpperCase();
            let weaponRunesString = weaponRunewords[w].runes.join(" + ");
            let weaponRunesCaps = weaponRunesString.toUpperCase();
            let weaponStatsString = weaponRunewords[w].stats.join("\n");
            let weaponStatsCaps = weaponStatsString.toUpperCase();

            weaponName.innerText = weaponNameCaps;
            weaponBases.innerText = weaponBasesCaps;
            weaponRunes.innerText = weaponRunesCaps;
            weaponLevel.innerText = "REQUIRED LEVEL: " + weaponRunewords[w].level;
            weaponStats.innerText = weaponStatsCaps;

            runewordsList.appendChild(weaponName);
            runewordsList.appendChild(weaponBases);
            runewordsList.appendChild(weaponRunes);
            runewordsList.appendChild(weaponLevel);
            runewordsList.appendChild(weaponStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }
}

function filterBodyArmor() {
    bodyArmorRunewords = [];
    runewordsList.innerHTML = "";

    for (let i = 0; i < foundRunewords.length; i++) {
        if (foundRunewords[i].type.includes("body armor")) {
            bodyArmorRunewords.push(foundRunewords[i]);
        }
    }

    if (bodyArmorRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }

    if (nonLadderCheck.checked) {
        for (let b = 0; b < bodyArmorRunewords.length; b++) {
            if (bodyArmorRunewords[b].ladder === false) {
                let bodyArmorNlName = document.createElement("h2");
                let bodyArmorNlBases = document.createElement("div");
                bodyArmorNlBases.style.opacity = "0.33";
                let bodyArmorNlRunes = document.createElement("div");
                bodyArmorNlRunes.style.color = "#b4a372";
                let bodyArmorNlLevel = document.createElement("div");
                let bodyArmorNlStats = document.createElement("div");
                bodyArmorNlStats.style.color = "#595ed8";
                bodyArmorNlStats.style.fontSize = ".75rem";

                let bodyArmorNlNameCaps = bodyArmorRunewords[b].name.toUpperCase();
                let bodyArmorNlBasesCaps = bodyArmorRunewords[b].bases.toUpperCase();
                let bodyArmorNlRunesString = bodyArmorRunewords[b].runes.join(" + ");
                let bodyArmorNlRunesCaps = bodyArmorNlRunesString.toUpperCase();
                let bodyArmorNlStatsString = bodyArmorRunewords[b].stats.join("\n");
                let bodyArmorNlStatsCaps = bodyArmorNlStatsString.toUpperCase();

                bodyArmorNlName.innerText = bodyArmorNlNameCaps;
                bodyArmorNlBases.innerText = bodyArmorNlBasesCaps;
                bodyArmorNlRunes.innerText = bodyArmorNlRunesCaps;
                bodyArmorNlLevel.innerText = "REQUIRED LEVEL: " + bodyArmorRunewords[b].level;
                bodyArmorNlStats.innerText = bodyArmorNlStatsCaps;

                runewordsList.appendChild(bodyArmorNlName);
                runewordsList.appendChild(bodyArmorNlBases);
                runewordsList.appendChild(bodyArmorNlRunes);
                runewordsList.appendChild(bodyArmorNlLevel);
                runewordsList.appendChild(bodyArmorNlStats);
                runewordsList.appendChild(document.createElement("br"));
            }
        }
    } else {
        for (let b = 0; b < bodyArmorRunewords.length; b++) {
            let bodyArmorName = document.createElement("h2");
            let bodyArmorBases = document.createElement("div");
            bodyArmorBases.style.opacity = "0.33";
            let bodyArmorRunes = document.createElement("div");
            bodyArmorRunes.style.color = "#b4a372";
            let bodyArmorLevel = document.createElement("div");
            let bodyArmorStats = document.createElement("div");
            bodyArmorStats.style.color = "#595ed8";
            bodyArmorStats.style.fontSize = ".75rem";

            let bodyArmorNameCaps = bodyArmorRunewords[b].name.toUpperCase();
            let bodyArmorBasesCaps = bodyArmorRunewords[b].bases.toUpperCase();
            let bodyArmorRunesString = bodyArmorRunewords[b].runes.join(" + ");
            let bodyArmorRunesCaps = bodyArmorRunesString.toUpperCase();
            let bodyArmorStatsString = bodyArmorRunewords[b].stats.join("\n");
            let bodyArmorStatsCaps = bodyArmorStatsString.toUpperCase();

            bodyArmorName.innerText = bodyArmorNameCaps;
            bodyArmorBases.innerText = bodyArmorBasesCaps;
            bodyArmorRunes.innerText = bodyArmorRunesCaps;
            bodyArmorLevel.innerText = "REQUIRED LEVEL: " + bodyArmorRunewords[b].level;
            bodyArmorStats.innerText = bodyArmorStatsCaps;

            runewordsList.appendChild(bodyArmorName);
            runewordsList.appendChild(bodyArmorBases);
            runewordsList.appendChild(bodyArmorRunes);
            runewordsList.appendChild(bodyArmorLevel);
            runewordsList.appendChild(bodyArmorStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }
}

function filterShields() {
    shieldRunewords = [];
    runewordsList.innerHTML = "";

    for (let i = 0; i < foundRunewords.length; i++) {
        if (foundRunewords[i].type.includes("shields")) {
            shieldRunewords.push(foundRunewords[i]);
        }
    }

    if (shieldRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }

    if (nonLadderCheck.checked) {
        for (let s = 0; s < shieldRunewords.length; s++) {
            if (shieldRunewords[s].ladder === false) {
                let shieldNlName = document.createElement("h2");
                let shieldNlBases = document.createElement("div");
                shieldNlBases.style.opacity = "0.33";
                let shieldNlRunes = document.createElement("div");
                shieldNlRunes.style.color = "#b4a372";
                let shieldNlLevel = document.createElement("div");
                let shieldNlStats = document.createElement("div");
                shieldNlStats.style.color = "#595ed8";
                shieldNlStats.style.fontSize = ".75rem";

                let shieldNlNameCaps = shieldRunewords[s].name.toUpperCase();
                let shieldNlBasesCaps = shieldRunewords[s].bases.toUpperCase();
                let shieldNlRunesString = shieldRunewords[s].runes.join(" + ");
                let shieldNlRunesCaps = shieldNlRunesString.toUpperCase();
                let shieldNlStatsString = shieldRunewords[s].stats.join("\n");
                let shieldNlStatsCaps = shieldNlStatsString.toUpperCase();

                shieldNlName.innerText = shieldNlNameCaps;
                shieldNlBases.innerText = shieldNlBasesCaps;
                shieldNlRunes.innerText = shieldNlRunesCaps;
                shieldNlLevel.innerText = "REQUIRED LEVEL: " + shieldRunewords[s].level;
                shieldNlStats.innerText = shieldNlStatsCaps;

                runewordsList.appendChild(shieldNlName);
                runewordsList.appendChild(shieldNlBases);
                runewordsList.appendChild(shieldNlRunes);
                runewordsList.appendChild(shieldNlLevel);
                runewordsList.appendChild(shieldNlStats);
                runewordsList.appendChild(document.createElement("br"));
            }
        }
    } else {
        for (let s = 0; s < shieldRunewords.length; s++) {
            let shieldName = document.createElement("h2");
            let shieldBases = document.createElement("div");
            shieldBases.style.opacity = "0.33";
            let shieldRunes = document.createElement("div");
            shieldRunes.style.color = "#b4a372";
            let shieldLevel = document.createElement("div");
            let shieldStats = document.createElement("div");
            shieldStats.style.color = "#595ed8";
            shieldStats.style.fontSize = ".75rem";

            let shieldNameCaps = shieldRunewords[s].name.toUpperCase();
            let shieldBasesCaps = shieldRunewords[s].bases.toUpperCase();
            let shieldRunesString = shieldRunewords[s].runes.join(" + ");
            let shieldRunesCaps = shieldRunesString.toUpperCase();
            let shieldStatsString = shieldRunewords[s].stats.join("\n");
            let shieldStatsCaps = shieldStatsString.toUpperCase();

            shieldName.innerText = shieldNameCaps;
            shieldBases.innerText = shieldBasesCaps;
            shieldRunes.innerText = shieldRunesCaps;
            shieldLevel.innerText = "REQUIRED LEVEL: " + shieldRunewords[s].level;
            shieldStats.innerText = shieldStatsCaps;

            runewordsList.appendChild(shieldName);
            runewordsList.appendChild(shieldBases);
            runewordsList.appendChild(shieldRunes);
            runewordsList.appendChild(shieldLevel);
            runewordsList.appendChild(shieldStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }
}

function filterShowAll() {
    runewordsList.innerHTML = "";

    if (foundRunewords.length == 0) {
        let nothingFound = document.createElement("h2");
        nothingFound.innerText = "NO RUNEWORDS FOUND";
        runewordsList.appendChild(nothingFound);
    }

    if (nonLadderCheck.checked) {
        for (let i = 0; i < foundRunewords.length; i++) {
            if (foundRunewords[i].ladder === false) {
                let allNlName = document.createElement("h2");
                let allNlBases = document.createElement("div");
                allNlBases.style.opacity = "0.33";
                let allNlRunes = document.createElement("div");
                allNlRunes.style.color = "#b4a372";
                let allNlLevel = document.createElement("div");
                let allNlStats = document.createElement("div");
                allNlStats.style.color = "#595ed8";
                allNlStats.style.fontSize = ".75rem";

                let allNlNameCaps = foundRunewords[i].name.toUpperCase();
                let allNlBasesCaps = foundRunewords[i].bases.toUpperCase();
                let allNlRunesString = foundRunewords[i].runes.join(" + ");
                let allNlRunesCaps = allNlRunesString.toUpperCase();
                let allNlStatsString = foundRunewords[i].stats.join("\n");
                let allNlStatsCaps = allNlStatsString.toUpperCase();

                allNlName.innerText = allNlNameCaps;
                allNlBases.innerText = allNlBasesCaps;
                allNlRunes.innerText = allNlRunesCaps;
                allNlLevel.innerText = "REQUIRED LEVEL: " + foundRunewords[i].level;
                allNlStats.innerText = allNlStatsCaps;

                runewordsList.appendChild(allNlName);
                runewordsList.appendChild(allNlBases);
                runewordsList.appendChild(allNlRunes);
                runewordsList.appendChild(allNlLevel);
                runewordsList.appendChild(allNlStats);
                runewordsList.appendChild(document.createElement("br"));
            }
        }
    } else {
        for (let i = 0; i < foundRunewords.length; i++) {
            let allName = document.createElement("h2");
            let allBases = document.createElement("div");
            allBases.style.opacity = "0.33";
            let allRunes = document.createElement("div");
            allRunes.style.color = "#b4a372";
            let allLevel = document.createElement("div");
            let allStats = document.createElement("div");
            allStats.style.color = "#595ed8";
            allStats.style.fontSize = ".75rem";

            let allNameCaps = foundRunewords[i].name.toUpperCase();
            let allBasesCaps = foundRunewords[i].bases.toUpperCase();
            let allRunesString = foundRunewords[i].runes.join(" + ");
            let allRunesCaps = allRunesString.toUpperCase();
            let allStatsString = foundRunewords[i].stats.join("\n");
            let allStatsCaps = allStatsString.toUpperCase();

            allName.innerText = allNameCaps;
            allBases.innerText = allBasesCaps;
            allRunes.innerText = allRunesCaps;
            allLevel.innerText = "REQUIRED LEVEL: " + foundRunewords[i].level;
            allStats.innerText = allStatsCaps;

            runewordsList.appendChild(allName);
            runewordsList.appendChild(allBases);
            runewordsList.appendChild(allRunes);
            runewordsList.appendChild(allLevel);
            runewordsList.appendChild(allStats);
            runewordsList.appendChild(document.createElement("br"));
        }
    }
}

function nonLadderToggle() {
    if (nonLadderCheck.checked && runewordsFilter.innerText == "Show All") {
        runewordsList.innerHTML = "";

        if (foundRunewords.length == 0) {
            let nothingFound = document.createElement("h2");
            nothingFound.innerText = "NO RUNEWORDS FOUND";
            runewordsList.appendChild(nothingFound);
        } else {
            for (let i = 0; i < foundRunewords.length; i++) {
                if (foundRunewords[i].ladder === false) {
                    let allNlName = document.createElement("h2");
                    let allNlBases = document.createElement("div");
                    allNlBases.style.opacity = "0.33";
                    let allNlRunes = document.createElement("div");
                    allNlRunes.style.color = "#b4a372";
                    let allNlLevel = document.createElement("div");
                    let allNlStats = document.createElement("div");
                    allNlStats.style.color = "#595ed8";
                    allNlStats.style.fontSize = ".75rem";

                    let allNlNameCaps = foundRunewords[i].name.toUpperCase();
                    let allNlBasesCaps = foundRunewords[i].bases.toUpperCase();
                    let allNlRunesString = foundRunewords[i].runes.join(" + ");
                    let allNlRunesCaps = allNlRunesString.toUpperCase();
                    let allNlStatsString = foundRunewords[i].stats.join("\n");
                    let allNlStatsCaps = allNlStatsString.toUpperCase();

                    allNlName.innerText = allNlNameCaps;
                    allNlBases.innerText = allNlBasesCaps;
                    allNlRunes.innerText = allNlRunesCaps;
                    allNlLevel.innerText = "REQUIRED LEVEL: " + foundRunewords[i].level;
                    allNlStats.innerText = allNlStatsCaps;

                    runewordsList.appendChild(allNlName);
                    runewordsList.appendChild(allNlBases);
                    runewordsList.appendChild(allNlRunes);
                    runewordsList.appendChild(allNlLevel);
                    runewordsList.appendChild(allNlStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    } else if (nonLadderCheck.checked && runewordsFilter.innerText == "Helms") {
        runewordsList.innerHTML = "";

        if (helmRunewords.length == 0) {
            let nothingFound = document.createElement("h2");
            nothingFound.innerText = "NO RUNEWORDS FOUND";
            runewordsList.appendChild(nothingFound);
        } else {
            for (let h = 0; h < helmRunewords.length; h++) {
                if (helmRunewords[h].ladder === false) {
                    let helmNlName = document.createElement("h2");
                    let helmNlBases = document.createElement("div");
                    helmNlBases.style.opacity = "0.33";
                    let helmNlRunes = document.createElement("div");
                    helmNlRunes.style.color = "#b4a372";
                    let helmNlLevel = document.createElement("div");
                    let helmNlStats = document.createElement("div");
                    helmNlStats.style.color = "#595ed8";
                    helmNlStats.style.fontSize = ".75rem";

                    let helmNlNameCaps = helmRunewords[h].name.toUpperCase();
                    let helmNlBasesCaps = helmRunewords[h].bases.toUpperCase();
                    let helmNlRunesString = helmRunewords[h].runes.join(" + ");
                    let helmNlRunesCaps = helmNlRunesString.toUpperCase();
                    let helmNlStatsString = helmRunewords[h].stats.join("\n");
                    let helmNlStatsCaps = helmNlStatsString.toUpperCase();

                    helmNlName.innerText = helmNlNameCaps;
                    helmNlBases.innerText = helmNlBasesCaps;
                    helmNlRunes.innerText = helmNlRunesCaps;
                    helmNlLevel.innerText = "REQUIRED LEVEL: " + helmRunewords[h].level;
                    helmNlStats.innerText = helmNlStatsCaps;

                    runewordsList.appendChild(helmNlName);
                    runewordsList.appendChild(helmNlBases);
                    runewordsList.appendChild(helmNlRunes);
                    runewordsList.appendChild(helmNlLevel);
                    runewordsList.appendChild(helmNlStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    } else if (nonLadderCheck.checked && runewordsFilter.innerText == "Weapons") {
        runewordsList.innerHTML = "";

        if (weaponRunewords.length == 0) {
            let nothingFound = document.createElement("h2");
            nothingFound.innerText = "NO RUNEWORDS FOUND";
            runewordsList.appendChild(nothingFound);
        } else {
            for (let w = 0; w < weaponRunewords.length; w++) {
                if (weaponRunewords[w].ladder === false) {
                    let weaponNlName = document.createElement("h2");
                    let weaponNlBases = document.createElement("div");
                    weaponNlBases.style.opacity = "0.33";
                    let weaponNlRunes = document.createElement("div");
                    weaponNlRunes.style.color = "#b4a372";
                    let weaponNlLevel = document.createElement("div");
                    let weaponNlStats = document.createElement("div");
                    weaponNlStats.style.color = "#595ed8";
                    weaponNlStats.style.fontSize = ".75rem";

                    let weaponNlNameCaps = weaponRunewords[w].name.toUpperCase();
                    let weaponNlBasesCaps = weaponRunewords[w].bases.toUpperCase();
                    let weaponNlRunesString = weaponRunewords[w].runes.join(" + ");
                    let weaponNlRunesCaps = weaponNlRunesString.toUpperCase();
                    let weaponNlStatsString = weaponRunewords[w].stats.join("\n");
                    let weaponNlStatsCaps = weaponNlStatsString.toUpperCase();

                    weaponNlName.innerText = weaponNlNameCaps;
                    weaponNlBases.innerText = weaponNlBasesCaps;
                    weaponNlRunes.innerText = weaponNlRunesCaps;
                    weaponNlLevel.innerText = "REQUIRED LEVEL: " + weaponRunewords[w].level;
                    weaponNlStats.innerText = weaponNlStatsCaps;

                    runewordsList.appendChild(weaponNlName);
                    runewordsList.appendChild(weaponNlBases);
                    runewordsList.appendChild(weaponNlRunes);
                    runewordsList.appendChild(weaponNlLevel);
                    runewordsList.appendChild(weaponNlStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    } else if (nonLadderCheck.checked && runewordsFilter.innerText == "Body Armor") {
        runewordsList.innerHTML = "";

        if (bodyArmorRunewords.length == 0) {
            let nothingFound = document.createElement("h2");
            nothingFound.innerText = "NO RUNEWORDS FOUND";
            runewordsList.appendChild(nothingFound);
        } else {
            for (let b = 0; b < bodyArmorRunewords.length; b++) {
                if (bodyArmorRunewords[b].ladder === false) {
                    let bodyArmorNlName = document.createElement("h2");
                    let bodyArmorNlBases = document.createElement("div");
                    bodyArmorNlBases.style.opacity = "0.33";
                    let bodyArmorNlRunes = document.createElement("div");
                    bodyArmorNlRunes.style.color = "#b4a372";
                    let bodyArmorNlLevel = document.createElement("div");
                    let bodyArmorNlStats = document.createElement("div");
                    bodyArmorNlStats.style.color = "#595ed8";
                    bodyArmorNlStats.style.fontSize = ".75rem";

                    let bodyArmorNlNameCaps = bodyArmorRunewords[b].name.toUpperCase();
                    let bodyArmorNlBasesCaps = bodyArmorRunewords[b].bases.toUpperCase();
                    let bodyArmorNlRunesString = bodyArmorRunewords[b].runes.join(" + ");
                    let bodyArmorNlRunesCaps = bodyArmorNlRunesString.toUpperCase();
                    let bodyArmorNlStatsString = bodyArmorRunewords[b].stats.join("\n");
                    let bodyArmorNlStatsCaps = bodyArmorNlStatsString.toUpperCase();

                    bodyArmorNlName.innerText = bodyArmorNlNameCaps;
                    bodyArmorNlBases.innerText = bodyArmorNlBasesCaps;
                    bodyArmorNlRunes.innerText = bodyArmorNlRunesCaps;
                    bodyArmorNlLevel.innerText = "REQUIRED LEVEL: " + bodyArmorRunewords[b].level;
                    bodyArmorNlStats.innerText = bodyArmorNlStatsCaps;

                    runewordsList.appendChild(bodyArmorNlName);
                    runewordsList.appendChild(bodyArmorNlBases);
                    runewordsList.appendChild(bodyArmorNlRunes);
                    runewordsList.appendChild(bodyArmorNlLevel);
                    runewordsList.appendChild(bodyArmorNlStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    } else if (nonLadderCheck.checked && runewordsFilter.innerText == "Shields") {
        runewordsList.innerHTML = "";

        if (shieldRunewords.length == 0) {
            let nothingFound = document.createElement("h2");
            nothingFound.innerText = "NO RUNEWORDS FOUND";
            runewordsList.appendChild(nothingFound);
        } else {
            for (let s = 0; s < shieldRunewords.length; s++) {
                if (shieldRunewords[s].ladder === false) {
                    let shieldNlName = document.createElement("h2");
                    let shieldNlBases = document.createElement("div");
                    shieldNlBases.style.opacity = "0.33";
                    let shieldNlRunes = document.createElement("div");
                    shieldNlRunes.style.color = "#b4a372";
                    let shieldNlLevel = document.createElement("div");
                    let shieldNlStats = document.createElement("div");
                    shieldNlStats.style.color = "#595ed8";
                    shieldNlStats.style.fontSize = ".75rem";

                    let shieldNlNameCaps = shieldRunewords[s].name.toUpperCase();
                    let shieldNlBasesCaps = shieldRunewords[s].bases.toUpperCase();
                    let shieldNlRunesString = shieldRunewords[s].runes.join(" + ");
                    let shieldNlRunesCaps = shieldNlRunesString.toUpperCase();
                    let shieldNlStatsString = shieldRunewords[s].stats.join("\n");
                    let shieldNlStatsCaps = shieldNlStatsString.toUpperCase();

                    shieldNlName.innerText = shieldNlNameCaps;
                    shieldNlBases.innerText = shieldNlBasesCaps;
                    shieldNlRunes.innerText = shieldNlRunesCaps;
                    shieldNlLevel.innerText = "REQUIRED LEVEL: " + shieldRunewords[s].level;
                    shieldNlStats.innerText = shieldNlStatsCaps;

                    runewordsList.appendChild(shieldNlName);
                    runewordsList.appendChild(shieldNlBases);
                    runewordsList.appendChild(shieldNlRunes);
                    runewordsList.appendChild(shieldNlLevel);
                    runewordsList.appendChild(shieldNlStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    } else {
        runewordsList.innerHTML = "";

        if (nonLadderCheck.checked === false && runewordsFilter.innerText == "Helms") {
            filterHelms();
        } else if (nonLadderCheck.checked === false && runewordsFilter.innerText == "Weapons") {
            filterWeapons();
        } else if (nonLadderCheck.checked === false && runewordsFilter.innerText == "Body Armor") {
            filterBodyArmor();
        } else if (nonLadderCheck.checked === false && runewordsFilter.innerText == "Shields") {
            filterShields();
        } else {
            if (foundRunewords.length == 0) {
                let nothingFound = document.createElement("h2");
                nothingFound.innerText = "NO RUNEWORDS FOUND";
                runewordsList.appendChild(nothingFound);
            } else {
                for (let u = 0; u < foundRunewords.length; u++) {
                    let allName = document.createElement("h2");
                    let allBases = document.createElement("div");
                    allBases.style.opacity = "0.33";
                    let allRunes = document.createElement("div");
                    allRunes.style.color = "#b4a372";
                    let allLevel = document.createElement("div");
                    let allStats = document.createElement("div");
                    allStats.style.color = "#595ed8";
                    allStats.style.fontSize = ".75rem";

                    let allNameCaps = foundRunewords[u].name.toUpperCase();
                    let allBasesCaps = foundRunewords[u].bases.toUpperCase();
                    let allRunesString = foundRunewords[u].runes.join(" + ");
                    let allRunesCaps = allRunesString.toUpperCase();
                    let allStatsString = foundRunewords[u].stats.join("\n");
                    let allStatsCaps = allStatsString.toUpperCase();

                    allName.innerText = allNameCaps;
                    allBases.innerText = allBasesCaps;
                    allRunes.innerText = allRunesCaps;
                    allLevel.innerText = "REQUIRED LEVEL: " + foundRunewords[u].level;
                    allStats.innerText = allStatsCaps;

                    runewordsList.appendChild(allName);
                    runewordsList.appendChild(allBases);
                    runewordsList.appendChild(allRunes);
                    runewordsList.appendChild(allLevel);
                    runewordsList.appendChild(allStats);
                    runewordsList.appendChild(document.createElement("br"));
                }
            }
        }
    }
}

/*Displays Selected Runeword Filter*/
$('.dropdown-menu a').click(function () {
    $('#runewords-filter').text($(this).text());
})

/*Off-Canvas Menu*/
function openOffcanvas() {
    document.getElementById("myOffcanvas").classList.add("offCanvasWidth");
    document.getElementById("runewords-nav").style.opacity = "100";
}
function openNav() {
    document.getElementById("myCanvasNav").style.width = "100%";
    document.getElementById("myCanvasNav").style.opacity = "0.8";
}
function closeOffcanvas() {
    document.getElementById("myOffcanvas").classList.remove("offCanvasWidth");
    document.getElementById("myCanvasNav").style.width = "0%";
    document.getElementById("myCanvasNav").style.opacity = "0";
    runewordsList.innerHTML = "";
    runewordsFilter.innerText = "Show All";
    nonLadderCheck.checked = false;
    document.getElementById("runewords-nav").style.opacity = "0";
}

function resetSelectAll() {
    selectAllCheck.checked = false;
    selectAllBtn.innerText = "SELECT ALL";
}

$(".rune-btn-check").change(function () {
    if ($(".rune-btn-check:not(:checked)").length == 0) {
        selectAllCheck.checked = true;
        selectAllBtn.innerText = "SELECT NONE";
    }
});

function save() {
    localStorage.setItem("btncheck1", btncheck1.checked);
    localStorage.setItem("btncheck2", btncheck2.checked);
    localStorage.setItem("btncheck3", btncheck3.checked);
    localStorage.setItem("btncheck4", btncheck4.checked);
    localStorage.setItem("btncheck5", btncheck5.checked);
    localStorage.setItem("btncheck6", btncheck6.checked);
    localStorage.setItem("btncheck7", btncheck7.checked);
    localStorage.setItem("btncheck8", btncheck8.checked);
    localStorage.setItem("btncheck9", btncheck9.checked);
    localStorage.setItem("btncheck10", btncheck10.checked);
    localStorage.setItem("btncheck11", btncheck11.checked);
    localStorage.setItem("btncheck12", btncheck12.checked);
    localStorage.setItem("btncheck13", btncheck13.checked);
    localStorage.setItem("btncheck14", btncheck14.checked);
    localStorage.setItem("btncheck15", btncheck15.checked);
    localStorage.setItem("btncheck16", btncheck16.checked);
    localStorage.setItem("btncheck17", btncheck17.checked);
    localStorage.setItem("btncheck18", btncheck18.checked);
    localStorage.setItem("btncheck19", btncheck19.checked);
    localStorage.setItem("btncheck20", btncheck20.checked);
    localStorage.setItem("btncheck21", btncheck21.checked);
    localStorage.setItem("btncheck22", btncheck22.checked);
    localStorage.setItem("btncheck23", btncheck23.checked);
    localStorage.setItem("btncheck24", btncheck24.checked);
    localStorage.setItem("btncheck25", btncheck25.checked);
    localStorage.setItem("btncheck26", btncheck26.checked);
    localStorage.setItem("btncheck27", btncheck27.checked);
    localStorage.setItem("btncheck28", btncheck28.checked);
    localStorage.setItem("btncheck29", btncheck29.checked);
    localStorage.setItem("btncheck30", btncheck30.checked);
    localStorage.setItem("btncheck31", btncheck31.checked);
    localStorage.setItem("btncheck32", btncheck32.checked);
    localStorage.setItem("btncheck33", btncheck33.checked);
    localStorage.setItem("btncheck34", btncheck34.checked);
}

btncheck1.checked = checked1;
btncheck2.checked = checked2;
btncheck3.checked = checked3;
btncheck4.checked = checked4;
btncheck5.checked = checked5;
btncheck6.checked = checked6;
btncheck7.checked = checked7;
btncheck8.checked = checked8;
btncheck9.checked = checked9;
btncheck10.checked = checked10;
btncheck11.checked = checked11;
btncheck12.checked = checked12;
btncheck13.checked = checked13;
btncheck14.checked = checked14;
btncheck15.checked = checked15;
btncheck16.checked = checked16;
btncheck17.checked = checked17;
btncheck18.checked = checked18;
btncheck19.checked = checked19;
btncheck20.checked = checked20;
btncheck21.checked = checked21;
btncheck22.checked = checked22;
btncheck23.checked = checked23;
btncheck24.checked = checked24;
btncheck25.checked = checked25;
btncheck26.checked = checked26;
btncheck27.checked = checked27;
btncheck28.checked = checked28;
btncheck29.checked = checked29;
btncheck30.checked = checked30;
btncheck31.checked = checked31;
btncheck32.checked = checked32;
btncheck33.checked = checked33;
btncheck34.checked = checked34;