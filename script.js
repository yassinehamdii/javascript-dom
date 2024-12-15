// Function to update the total price displayed
function updateTotalPrice() {
  let total = 0;

  // Calculate total price based on quantities of all products
  document.querySelectorAll(".card").forEach((card) => {
    const price = parseInt(card.querySelector(".unit-price").textContent); // Get the unit price
    const quantity = parseInt(card.querySelector(".quantity").textContent); // Get the current quantity
    total += price * quantity; // Add to total
  });

  // Update the total price display
  document.querySelector(".total").textContent = total + " $";
}

// Event listeners for "+" buttons to increase quantity
document.querySelectorAll(".fa-plus-circle").forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.nextElementSibling; // Get the quantity span element
    let quantity = parseInt(quantityElement.textContent); // Parse the current quantity
    quantityElement.textContent = ++quantity; // Increment the quantity and update display

    updateTotalPrice(); // Update the total price after changing quantity
  });
});

// Event listeners for "-" buttons to decrease quantity
document.querySelectorAll(".fa-minus-circle").forEach((button) => {
  button.addEventListener("click", () => {
    const quantityElement = button.previousElementSibling; // Get the quantity span element
    let quantity = parseInt(quantityElement.textContent); // Parse the current quantity
    if (quantity > 0) {
      // Ensure quantity does not go below 0
      quantityElement.textContent = --quantity; // Decrement the quantity and update display

      updateTotalPrice(); // Update the total price after changing quantity
    }
  });
});

// Event listeners for delete buttons to remove items from cart
document.querySelectorAll(".fa-trash-alt").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card"); // Get closest card element
    card.remove(); // Remove card from DOM
    updateTotalPrice(); // Update total price after removing item
  });
});

// Event listeners for like buttons to toggle favorite status
document.querySelectorAll(".fa-heart").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("liked"); // Toggle liked state
    button.style.color = button.classList.contains("liked") ? "red" : "gray"; // Change color based on state
  });
});
