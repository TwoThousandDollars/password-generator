const Password = () => {

    // Cache DOM
    let inputs = document.querySelectorAll('input');
    
    // Set password requirement variables
    let UPPERCASE = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let LOWERCASE = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let NUMBERS = [0,1,2,3,4,5,6,7,8,9]
    let SYMBOLS = ['!', '#', '$', '%', '^', '&', '*']

    console.log(getRandomValue(UPPERCASE));

    function getRandomValue(array) {
        let randomElement = array[Math.floor(Math.random() * array.length)];
        return randomElement;
    }

}

export default Password;