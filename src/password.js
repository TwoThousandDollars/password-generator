const Password = () => {

    // Cache DOM
    let inputs = document.querySelectorAll('input[type="checkbox"]');
    
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
    console.log(selectedConstraints);

    function getUserSelectedConstraints(input) {
        let userConstraints = [];
        
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

    function getRandomValue(array) {
        let randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement;
    }

    return 'Boobs';

}

export default Password;