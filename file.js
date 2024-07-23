
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description Determines whether a given number is prime or not. It checks divisibility
 * of the input number by all numbers up to its square root. If any such divisor
 * exists, it returns `false`, indicating the number is not prime; otherwise, it
 * returns `true`.
 * 
 * @param {number} num - Intended to be tested for primality.
 * 
 * @returns {boolean} Either `true` if the input number is a prime number and `false`
 * otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description Determines and returns the maximum value from an array of numbers.
 * It iterates through the array, comparing each element to a variable initialized
 * with the first element's value, updating the variable if a larger value is found.
 * 
 * @param {number[]} arr - An input array to find the maximum value from.
 * 
 * @returns {number} The largest element present in the input array.
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return str === reverseString(str);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description Counts the occurrences of each element in the input array and returns
 * an object with keys as unique elements from the array and values as their respective
 * counts.
 * 
 * @param {(string | number | bigint | symbol | object | function | undefined |
 * null)[]} arr - An array to count occurrences.
 * 
 * @returns {any} An object where each property key is a unique value from the input
 * array and its corresponding property value represents the frequency or count of
 * that value in the array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Counts occurrences in an array.

        // Counts occurrences.

        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
