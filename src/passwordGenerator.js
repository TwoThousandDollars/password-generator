import Password from './password.js';

const PasswordGenerator = () => {

    // Cache DOM
    let passwordDisplay = document.getElementById('passwordDisplay');
    let passwordCharacterConstraints = document.querySelectorAll('.input--checkbox');
    let passwordLengthConstraint = document.getElementById('passwordLength');
    let lengthOutput = document.getElementById('lengthOutput');

    // Bind events
    passwordCharacterConstraints.forEach(constraint => {
        constraint.oninput = () => {
            updateOutput();
        }
    });

    passwordLengthConstraint.oninput = () => {
        lengthOutput.innerText = this.value;
        updateOutput();
    }

    // Set display with initial password 
    updateOutput()

    function updateOutput() {
        passwordDisplay.innerText = Password();
    }

}

export default PasswordGenerator;