const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");

function checkInputs() {
    if (emailInput.value.trim() !== "" && passwordInput.value.trim() !== "")
        submitButton.disabled = false;
    else
        submitButton.disabled = true;
}

emailInput.addEventListener("input", checkInputs);
passwordInput.addEventListener("input", checkInputs);

checkInputs();