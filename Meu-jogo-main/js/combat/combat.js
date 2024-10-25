// js/combat/combat.js

let playerHealth = 100;
let enemyHealth = 50;

function attackEnemy(damage) {
    enemyHealth -= damage;
    if (enemyHealth <= 0) {
        console.log("Inimigo derrotado!");
    }
    updateHealthBars();
}

function enemyAttack() {
    const damage = Math.floor(Math.random() * 10) + 1; // Dano aleatório
    playerHealth -= damage;
    console.log(`O inimigo atacou e causou ${damage} de dano!`);
    updateHealthBars();
}

function updateHealthBars() {
    const playerHealthBar = document.getElementById("player-health");
    const enemyHealthBar = document.getElementById("enemy-health");

    playerHealthBar.style.width = playerHealth + "%";
    enemyHealthBar.style.width = enemyHealth + "%";
}

// Exibir barras de vida inicialmente
document.addEventListener('DOMContentLoaded', () => {
    const healthBarContainer = document.createElement('div');
    healthBarContainer.innerHTML = `
        <div class="health-bar">
            <div id="player-health" class="health" style="width: ${playerHealth}%;"></div>
        </div>
        <div class="health-bar">
            <div id="enemy-health" class="health" style="width: ${enemyHealth}%;"></div>
        </div>
    `;
    document.getElementById('combat').appendChild(healthBarContainer);
});
