function processArray(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num ** 2);
        } else {
            result.push(num * 3);
        }
    }
    return result;
}

const numberArray = [10, 21, 32, 43, 54, 1000, 2, -45];
const processedArray = processArray(numberArray);
console.log(processedArray);

function formatArrayStrings(strings, numbers) {
    let formattedStrings = [];
    for (let i = 0; i < strings.length; i++) {
        if (numbers[i] % 2 === 0) {
            formattedStrings.push(strings[i].toUpperCase());
        } else {
            formattedStrings.push(strings[i].toLowerCase());
        }
    }
    return formattedStrings;
}


const stringArray = ["Hello", "World", "JavaScript", "Coding", "Owusu", "Learning", "paul", "Git"];
const processedNumbers = processArray([10, 21, 32, 43, 54, 1000, 2, -45,]); 
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings);