import Password from './password.js';

const PasswordGenerator = () => {

    // Cache DOM
    let passwordDisplay = document.getElementById('passwordDisplay');
    console.log(passwordDisplay);
    let characterConstraints = document.querySelectorAll('.input--checkbox');
    let lengthConstraint = document.getElementById('passwordLength');
    let lengthOutput = document.getElementById('lengthOutput');
    let copyPasswordButton = document.getElementById('copyPassword');

    // Bind events
    characterConstraints.forEach(constraint => {
        constraint.oninput = () => {
            updateOutput();
        }
    });

    lengthConstraint.oninput = () => {
        lengthOutput.innerText = lengthConstraint.value;
        updateOutput();
    }

    copyPasswordButton.onclick = () => {
        copyToClipboard(passwordDisplay.id);
    }

    // Set display with initial password 
    updateOutput()

    function updateOutput() {
        passwordDisplay.innerText = Password(characterConstraints, lengthConstraint.value);
    }

    function copyToClipboard(containerId) {
        if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerId));
            range.select().createTextRange();
            document.execCommand("copy");
        } else if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerId));
            window.getSelection().addRange(range);
            document.execCommand("copy");
            alert("Copied Password")
        }
    }

}

export default PasswordGenerator;