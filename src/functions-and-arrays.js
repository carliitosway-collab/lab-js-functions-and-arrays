// Iteration 1 | Find the Maximum

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(maxOfTwoNumbers(3, 15))





// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(homeWork) {
    if (homeWork.length === 0) {
        return null;
    }

    let longest = homeWork[0];

    for (let i = 1; i < homeWork.length; i++) {
        if (homeWork[i].length > longest.length) {
            longest = homeWork[i];
        }
    }

    return longest;
}
console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
console.log(sumNumbers(numbers))



// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
    if (numbers.length === 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;
    return average;
}
console.log(averageNumbers(numbers2));



// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(listaDePalabras, wordToFind) {
    if (listaDePalabras.length === 0) {
        return null;
    }

    for (let i = 0; i < listaDePalabras.length; i++) {
        if (listaDePalabras[i] === wordToFind) {
            return true;
        }
    }

    return false;
}
console.log(doesWordExist([], "matter")); 