function formatNumberWithDots(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

const checkboxes = document.querySelectorAll(".checkbox");
const quantityInputs = document.querySelectorAll("input[type='number']");
const priceElement = document.getElementById("price");
const priceCells = document.querySelectorAll(".td-5");

function calculateTotal() {
    let total = 0;
    checkboxes.forEach((checkbox, index) => {
        const price = Number(checkbox.value);
        const quantity = Number(quantityInputs[index].value);
        let itemTotal = 0;

        if (checkbox.checked) {
            itemTotal = price * quantity;
            total += itemTotal;
        }
        priceCells[index].textContent = `Rp ${formatNumberWithDots(itemTotal)},-`;
    });
    priceElement.textContent = `Rp ${formatNumberWithDots(total)},-`;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", calculateTotal);
});

quantityInputs.forEach(input => {
    input.addEventListener("input", calculateTotal);
});

calculateTotal();



/* FOR LINKING */
document.getElementById("shop").addEventListener("click", function() {
    window.location.href = "shop.html";
});

document.getElementById("checkout").addEventListener("click", function() {
    window.location.href = "checkout.html";
});