const payButton = document.getElementById("pay");
const radioButtons = document.querySelectorAll(".payment-option");

function updateButtonState() {
    let isChecked = false;
    
    radioButtons.forEach(radio => {
        if (radio.checked) {
            isChecked = true;
        }
    });

    if (isChecked) {
        payButton.disabled = false;
        payButton.style.cursor = "pointer";
    } else {
        payButton.disabled = true;
        payButton.style.cursor = "default";
    }
}

radioButtons.forEach(radio => {
    radio.addEventListener("change", updateButtonState);
});

updateButtonState();