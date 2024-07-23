
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

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
 * @description Iterates through an array, identifying and storing the largest element.
 * It initializes `max` with the first array element and updates it if a larger value
 * is found. The function returns the maximum value upon completion of the iteration.
 * 
 * @param {number[]} arr - Used to find the maximum element in an array.
 * 
 * @returns {number} The maximum element found in the input array.
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
 * @description Counts the occurrences of each element in an array and returns a new
 * object with elements as keys and their corresponding frequencies as values. It
 * uses the `reduce` method to accumulate the count for each unique value in the array.
 * 
 * @param {(string | number | object | etc.)[]} arr - An array to be processed.
 * 
 * @returns {any} An object where each property represents a unique element from the
 * input array and its corresponding value is the count of occurrences of that element
 * in the array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Counts occurrences.

        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
