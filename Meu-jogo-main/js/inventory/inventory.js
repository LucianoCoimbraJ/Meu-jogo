// js/inventory/inventory.js

let inventory = [];

function addItemToInventory(item) {
    inventory.push(item);
    console.log(`${item.name} foi adicionado ao inventário.`);
    updateInventoryUI();
}

function updateInventoryUI() {
    const inventoryElement = document.getElementById("inventory");
    inventoryElement.innerHTML = ""; // Limpa o conteúdo

    inventory.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.className = "inventory-item";
        itemElement.textContent = item.name;
        inventoryElement.appendChild(itemElement);
    });
}

// Exemplo de item
const sword = { name: "Espada", type: "arma", effect: { damage: 10 } };
addItemToInventory(sword);
