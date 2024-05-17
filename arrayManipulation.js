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