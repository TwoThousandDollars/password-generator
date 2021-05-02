import Password from './password.js';

const PasswordGenerator = () => {

    // Cache DOM
    let pageContent = document.getElementById('content');
    
    // Build form
    let form = document.createElement('form');
    form.action = '';
    form.method = 'get';

    // Build display
    let passwordDisplay = document.createElement('div');
    passwordDisplay.id = 'passwordDisplay';
    passwordDisplay.classList.add('password-display');
    passwordDisplay.innerText = 'boobs';

    // Build form Inputs 
    let inputs = generatePasswordInputs("uppercase", "lowercase", "number", "symbols");

    // Append new elements to the page 
    addInputsToForm(inputs, form);
    pageContent.appendChild(form);
    pageContent.appendChild(passwordDisplay);

    // Generate new password
    let password = Password();


    function generatePasswordInputs() {
        let newInputs = [];
        for (let i = 0; i < arguments.length; i++) {
            let inputGroup = document.createElement('div');
            inputGroup.classList = 'form-group';

            let label = createLabel(arguments[i]);
            let input = createInput(arguments[i]);

            inputGroup.appendChild(input);
            inputGroup.appendChild(label);

            newInputs.push(inputGroup);;
        }
        
        return newInputs;
    }

    function addInputsToForm(inputs, form) {
        for (let i = 0; i < inputs.length; i++) {
            form.appendChild(inputs[i]);
        }
        let passwordLengthInput = generateNumberInput();
        form.appendChild(passwordLengthInput);
    }

    function generateNumberInput() {
        let numberContainer = document.createElement('div');
        numberContainer.classList.add('form-group--number');
        
        let output = document.createElement('div');
        
        let label = document.createElement('p');
        label.innerText = 'Password Length';
        label.classList.add('form-label--number');
        
        let length = document.createElement('p');

        output.appendChild(label);
        output.appendChild(length);
        
        let input = document.createElement('input');
        input.type = 'range';
        input.min = 8;
        input.max = 100;
        input.value = 16;
        input.oninput = () => {
            length.innerText = input.value;
        }

        length.innerText = input.value;

        numberContainer.appendChild(output);
        numberContainer.appendChild(input);

        return numberContainer;
    }

    function createInput(inputName) {
        let input = document.createElement('input');
        input.type='checkbox';
        input.name = inputName;
        input.id = inputName;
        input.checked = true;

        return input
    }

    function createLabel(labelName) {
        let label = document.createElement('label');
        label.innerText = labelName;
        label.htmlFor = labelName;

        return label;
    }

}

export default PasswordGenerator;