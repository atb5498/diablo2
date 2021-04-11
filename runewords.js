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

/*Runewords List*/
let runeBtnChecks = document.querySelectorAll(".rune-btn-check");
let runewordsList = document.getElementById("runewords-list");
let selectedRunes = [];
let runewords = [
    {
        name: "Breath of the Dying",
        bases: "Weapons",
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
        bases: "Body Armor",
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
    runewordsList.innerHTML = "";
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

    /*Finds all runewords that contain selected runes*/
    for (let i = 0; i < runewords.length; i++) {
        if (runewords[i].runes.every(rune => selectedRunesNoDupes.includes(rune))) {
            let runewordName = document.createElement("h2");
            let runewordBases = document.createElement("div");
            runewordBases.style.opacity = "0.25";
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
}