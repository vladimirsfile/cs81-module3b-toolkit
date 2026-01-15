// Double function 

function double(n) {
    return `The double of ${n} is ${n + n}`;
}
let n = 22;
result = double(n);
console.log(result);

// Square function 

function square(num) {
    return `The square of ${num} is ${num ** 2}`;
}
let num = 7;
output = square(num);
console.log(output);

// Function that returns only the even numbers
let listEven = [];

function isEven(numbers) {
    for (let number of numbers) {
        if (number % 2 === 0) {
            listEven.push(number);
        }
    }
    return listEven;
}
let numbers = [7, 33, 26, 0, 71, 28, 4];

console.log(isEven(numbers))

// Function that ouputs the odd numbers from a list 
listOdd = [];

function isOdd(nums) {
    for (num of nums) {
        if (num % 2 !== 0) {
            listOdd.push(num);
        }
    }
    return listOdd;
}
nums = [77, 14, 99, 2344, 3433, 55, 9];
console.log(isOdd(nums));