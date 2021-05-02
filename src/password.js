const Password = () => {

    // Cache DOM
    let inputs = document.querySelectorAll('input[type="checkbox"]');
    let length = document.querySelector('input[type="range"]').value;
    let INVALID_SELECTION_MESSAGE = "Please select at least one password constraint."
    
    // Set password requirement variables
    let UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let NUMBERS = [0,1,2,3,4,5,6,7,8,9]
    let SYMBOLS = ['!', '#', '$', '%', '^', '&', '*']

    let passwordConstraints = [
                                {   type: 'uppercase',
                                    values: UPPERCASE
                                },
                                {
                                    type: 'lowercase',
                                    values: LOWERCASE
                                },
                                {
                                    type: 'numbers',
                                    values: NUMBERS
                                },
                                {
                                    type: 'symbols',
                                    values: SYMBOLS
                                }
    ]


    let selectedConstraints = getUserSelectedConstraints(inputs);
    let password = '';

    if (selectedConstraints.length < 1) {
        password = INVALID_SELECTION_MESSAGE;
    } else {
        password = buildPassword(selectedConstraints, length);
    }

    function getUserSelectedConstraints(input) {
        let userConstraints = [];
        
        // Check all of the selected user inputs and grab only the necessary validations
        for (let i = 0; i < input.length; i++) {
            
            if (input[i].checked === true) {
                
                for (let j = 0; j < passwordConstraints.length; j++) {
                    
                    if (input[i].name === passwordConstraints[j].type) {
                        userConstraints.push(passwordConstraints[j].values);
                    }
                }
            }
        }

        return userConstraints;
    }

    function buildPassword(constraints, length) {

        // initialize password 
        let password = ''

        // Ensure all required constraints are used at least once
        constraints.forEach((c) => { password = password.concat(getRandomValue(c)) });

        
        // pad the rest of the password until required lenght is reached
        let adjustedLength = length - constraints.length;
        let flattenedConstraints = flattenConstraints(constraints)

        
        for (let i = 0; i < adjustedLength; i++) {
            password = password.concat(getRandomValue(flattenedConstraints));
        }

        return password;
    }

    function flattenConstraints(array) {
        let flatArray = [];
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                flatArray.push(array[i][j]);
            }
        }
        return flatArray;
    }

    function getRandomValue(array) {
        let randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement;
    }

    return password;

}

export default Password;