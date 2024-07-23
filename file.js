
/**
 * @description Calculates the factorial of a given non-negative integer `n`. It
 * returns the product of all positive integers from 1 to `n`, recursively multiplying
 * each number by the result of the factorial of the previous number.
 * 
 * @param {number} n - 0 or positive integer, representing a number to calculate
 * factorial for.
 * 
 * @returns {number} The result of multiplying all positive integers up to the input
 * number together, starting from 1.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description Determines whether a given integer is prime or not. It returns `false`
 * for numbers less than or equal to 1 and checks divisibility from 2 up to the square
 * root of the number. If no divisors are found, it returns `true`, indicating the
 * number is prime.
 * 
 * @param {number} num - Tested for primality.
 * 
 * @returns {boolean} `true` if the input number is a prime number and `false` otherwise.
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
 * @description Identifies and returns the largest element from an array of numbers,
 * starting with the first element as the initial maximum value and updating it if a
 * larger element is found during the iteration.
 * 
 * @param {number[]} arr - An input array.
 * 
 * @returns {number} The maximum element found within the input array.
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
 * @description Aggregates the occurrences of each element in an array, returning an
 * object where the property names are the elements and their values are the counts
 * of each occurrence. The function uses the `reduce` method to achieve this.
 * 
 * @param {(string | number | boolean | symbol | object | null | undefined)[]} arr -
 * An array of values to be counted.
 * 
 * @returns {any} An object where each key corresponds to a unique element from the
 * input array and its corresponding value represents the frequency of that element
 * in the array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Counts elements in an array.

        // Counts occurrences in an array.

        // Counts occurrences.

        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
