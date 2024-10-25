// js/core/app.js

export function initializeGame() {
    console.log("Inicializando o jogo...");
    document.getElementById("toggle-inventory").addEventListener("click", toggleInventory);
    document.getElementById("toggle-combat").addEventListener("click", toggleCombat);
}

function toggleInventory() {
    const inventory = document.getElementById("inventory");
    inventory.classList.toggle("hidden");
}

function toggleCombat() {
    const combat = document.getElementById("combat");
    combat.classList.toggle("hidden");
}
