// Met à jour le total du panier
function updateTotal() {
  const items = document.querySelectorAll(".item");
  let total = 0;
  items.forEach(item => {
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    const pricePerUnit = parseFloat(item.dataset.price);
    total += quantity * pricePerUnit;
  });
  document.getElementById("total").textContent = total;
}

// Bouton "+"
document.querySelectorAll(".plus").forEach(btn => {
  btn.addEventListener("click", function () {
    const item = this.parentElement;
    let quantityEl = item.querySelector(".quantity");
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateTotal();
  });
});

// Bouton "-"
document.querySelectorAll(".minus").forEach(btn => {
  btn.addEventListener("click", function () {
    const item = this.parentElement;
    let quantityEl = item.querySelector(".quantity");
    let quantity = parseInt(quantityEl.textContent);
    if (quantity > 1) {
      quantityEl.textContent = quantity - 1;
      updateTotal();
    }
  });
});

// Bouton supprimer 🗑
document.querySelectorAll(".remove").forEach(btn => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
    updateTotal();
  });
});

// Bouton cœur ♥
document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", function () {
    this.classList.toggle("liked");
  });
});

// Calcul du total au chargement de la page
updateTotal();
