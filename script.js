
const form = document.getElementById("applicationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const successMessage =
    document.getElementById("successMessage");


// =========================================
// SHOW ERROR
// =========================================

function showError(input, errorElement, message) {

    const formGroup = input.parentElement;

    formGroup.classList.add("error");
    formGroup.classList.remove("success");

    errorElement.textContent = message;
}


// =========================================
// SHOW SUCCESS
// =========================================

function showSuccess(input, errorElement) {

    const formGroup = input.parentElement;

    formGroup.classList.remove("error");
    formGroup.classList.add("success");

    errorElement.textContent = "";
}


// =========================================
// VALIDATE FORM
// =========================================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    let isValid = true;


    // Clear previous success message

    successMessage.textContent = "";


    // =====================================
    // NAME
    // =====================================

    const name = nameInput.value.trim();

    if (name === "") {

        showError(
            nameInput,
            nameError,
            "Please enter your full name."
        );

        isValid = false;

    } else if (name.length < 3) {

        showError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        isValid = false;

    } else {

        showSuccess(
            nameInput,
            nameError
        );
    }


    // =====================================
    // EMAIL
    // =====================================

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Please enter your email address."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        isValid = false;

    } else {

        showSuccess(
            emailInput,
            emailError
        );
    }


    // =====================================
    // PHONE
    // =====================================

    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        showError(
            phoneInput,
            phoneError,
            "Please enter your phone number."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            phoneError,
            "Phone number must contain exactly 10 digits."
        );

        isValid = false;

    } else {

        showSuccess(
            phoneInput,
            phoneError
        );
    }


    // =====================================
    // MESSAGE
    // =====================================

    const message = messageInput.value.trim();


    if (message === "") {

        showError(
            messageInput,
            messageError,
            "Please enter your message."
        );

        isValid = false;

    } else if (message.length < 10) {

        showError(
            messageInput,
            messageError,
            "Message must contain at least 10 characters."
        );

        isValid = false;

    } else {

        showSuccess(
            messageInput,
            messageError
        );
    }


    // =====================================
    // FORM SUCCESS
    // =====================================

    if (isValid) {

        successMessage.textContent =
            "✓ Application submitted successfully!";

        form.reset();

        // Remove green borders after reset
        setTimeout(function () {

            document
                .querySelectorAll(".form-group")
                .forEach(function (group) {

                    group.classList.remove("success");

                });

        }, 100);
    }

});

