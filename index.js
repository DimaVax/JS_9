// 1
// const array = ["pizza", 'hamburger', 'hot-dog']
// function logItems(array) {
//     let multiply = '';
//     for (let i = 0; i <= array.length - 1; i++) {
//         multiply += (`${array.indexOf(array[i]) + 1} - ${array[i]}  `);
//     }
//     return multiply;
// }
// console.log(logItems(array));

// 2
// const message = 'skibidi sigma pomni digital fortnaite chamba omagad rizz';
// const pricePerWord = 15;
// function calculateEngravingPrice(message, pricePerWord) {
//     const arrayMessage = message.split(' ');
//     const countOfWords = arrayMessage.length;
//     const sum = countOfWords * pricePerWord;
//     // for(let i = 0; i < arrayMessage.lenght; i++){
//     //     sum += pricePerWord;
//     // }
//     return sum;
// }
// console.log(calculateEngravingPrice(message, pricePerWord)); 

// 3
// const string = 'skibidi sigma pomni digital fortnaite chamba omagad rizz';

// function findLongestWord(string) {
//     const array = string.split(' ');
//     let longestWord = array[0].length;
//     for(let i = 1; i < array.length; i++){
//         if(longestWord < array[i].length) {
//             longestWord = array[i];
//         }
//     };
//     return longestWord;
// }
// console.log(findLongestWord(string));

// 4
// const string = 'skibidi sigma pomni digital fortnaite chamba omagad rizz';
// function formatString(string) {
//     let formatedString
//     if(string.length + 1 > 40) {
//         formatedString = string.slice(0, 40).padEnd(43, '.');
//     };
//     return formatedString;
// }
// console.log(formatString(string));

// 5
// const message = 'Hello, the is a very big sale in our shop! Come and check!';
// function checkForSpam(message){
//     let alertMessage
//     if(message.includes('spam') === true){
//         alertMessage = true;
//     }
//     else if(message.includes('sale') === true){
//         alertMessage = true;
//     }
//     else{
//         alertMessage = false;
//     }
//     return alertMessage;
// }
// console.log(checkForSpam(message));

// 6

// console.log(input)
// let numbers = [];
// let total = 0;
// for (let i = 0; i <= 1000000000; i++) {
//     let input = prompt('Введіть число.');
//     if (input === null) {
//         break;
//     }
//     else if (isNaN(Number.parseInt(input)) === true) {
//         alert('Було введено не число, попробуйте ще раз');
//     }
//     else {
//         numbers.push(Number.parseInt(input));
//         input = 0;
//     }
// }

// function addingNumbers(numbers) {
//         let sum = 0;
//         console.log(numbers);
//         for (let i = 0; i < numbers.length; i++) {
//             sum += numbers[i];
            
//         }
//         return sum;
//     }
// console.log(`Загальна сума чисел дорівнює ${addingNumbers(numbers)}`);

// 7
let allLogins = ['DimaVax201', 'SilverFish', 'MrBeast'];
const login = 'broo';
function isLoginValid(allLogins, login){
    let validatedLogin;
    if(login.length >= 4 && login.length <= 16){
        validatedLogin = true;
    }
    else{
        validatedLogin = false;
    }
    let uniquedLogin;
    for(let i = 0; i < allLogins.length; i++){
        if(login === allLogins[i]){
            uniquedLogin = false;
        }
        else{
            uniquedLogin = true;
        }
    }
    let message;
    if(validatedLogin === false){
        message = 'Помилка! Логін повинен бути від 4 до 16 символів';
    }
    else if(uniquedLogin === false){
        message = 'Такий логін уже використовується!';
    }
    else{
        allLogins.push(login);
        message = 'Логін успішно доданий!';
    }
    return message;
    // return validatedLogin;
}

console.log(isLoginValid(allLogins, login));
console.log(allLogins);
// function isLoginUnique(allLogins, login){
//     let uniquedLogin;
//     for(let i = 0; i < allLogins.length; i++){
//         if(login === allLogins[i]){
//             uniquedLogin = false;
//         }
//         else{
//             uniquedLogin = true;
//         }
//     }
// }
// function addLogin(allLogins, login){
//     let message;
//     if(validatedLogin === true){

//     }
// }