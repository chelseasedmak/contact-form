
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    const consentCheckbox = document.getElementById('consent');

    // Error message 
    const firstNameErrorRequired = document.getElementById('firstNameErrorRequired');
    const firstNameErrorLetters = document.getElementById('firstNameErrorLetters');
    const lastNameErrorRequired = document.getElementById('lastNameErrorRequired');
    const lastNameErrorLetters = document.getElementById('lastNameErrorLetters');
    const emailError = document.getElementById('emailError');
    const messageRequired = document.getElementById('messageRequried');
    const consentRequired = document.getElementById('consentRequired');

    form.addEventListener('submit', (event) => {
        let hasErrors = false;

        // Validate First Name
        if (!firstNameInput.value.trim()) {
            firstNameInput.classList.add('error');
            firstNameErrorRequired.style.display = 'block';
            hasErrors = true;
        } else if (!/^[a-zA-Z]+$/.test(firstNameInput.value)) {
            firstNameInput.classList.add('error');
            firstNameErrorLetters.style.display = 'block';
            hasErrors = true;
        } else {
            firstNameInput.classList.remove('error');
            firstNameErrorRequired.style.display = 'none';
            firstNameErrorLetters.style.display = 'none';
        }

        // Validate Last Name
        if (!lastNameInput.value.trim()) {
            lastNameInput.classList.add('error');
            lastNameErrorRequired.style.display = 'block';
            hasErrors = true;
        } else if (!/^[a-zA-Z]+$/.test(lastNameInput.value)) {
            lastNameInput.classList.add('error');
            lastNameErrorLetters.style.display = 'block';
            hasErrors = true;
        } else {
            lastNameInput.classList.remove('error');
            lastNameErrorRequired.style.display = 'none';
            lastNameErrorLetters.style.display = 'none';
        }

        // Validate Email
        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            emailInput.classList.add('error');
            emailError.style.display = 'block';
            hasErrors = true;
        } else {
            emailInput.classList.remove('error');
            emailError.style.display = 'none';
        }

        // Validate Message
        if (!messageTextarea.value.trim()) {
            messageTextarea.classList.add('error');
            messageRequired.style.display = 'block';
            hasErrors = true;
        } else {
            messageTextarea.classList.remove('error');
            messageRequired.style.display = 'none';
        }

        // Validate Consent
        if (!consentCheckbox.checked) {
            consentCheckbox.classList.add('error');
            consentRequired.style.display = 'block';
            hasErrors = true;
        } else {
            consentCheckbox.classList.remove('error');
            consentRequired.style.display = 'none';
        }

        // Prevent form submission if it has errors
        if (hasErrors) {
            event.preventDefault();
        }
    });

    // Email validation 
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
