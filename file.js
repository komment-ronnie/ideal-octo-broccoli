
/**
 * @description Calculates the factorial of a given integer `n`. It does so by
 * recursively multiplying `n` with the factorial of `n-1`, until it reaches the base
 * case of `n === 0` or `n === 1`, at which point it returns 1.
 * 
 * @param {number} n - An input value for calculating factorial.
 * 
 * @returns {number} The product of all positive integers from 1 to n. If n is 0 or
 * 1, it returns 1. For other values of n, it recursively calculates the factorial
 * as a multiplication of n and the factorial of (n-1).
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description Determines whether a given integer is a prime number or not. It returns
 * `false` if the input number is less than or equal to 1, and checks for divisibility
 * up to the square root of the number. If no divisor is found, it returns `true`.
 * 
 * @param {number} num - Being checked for primality.
 * 
 * @returns {boolean} `true` if the input number is prime and `false` otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description Converts a temperature from Celsius to Fahrenheit by multiplying the
 * input value by 9, dividing by 5, and then adding 32.
 * 
 * @param {number} celsius - Temperature value to be converted.
 * 
 * @returns {number} 9 times the input celsius value divided by 5 and then added to
 * 32. The result represents the temperature in Fahrenheit scale.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description Determines the maximum value within an array of numbers by iterating
 * through each element and comparing it with the current maximum value, updating the
 * maximum if a larger value is found, until all elements have been checked.
 * 
 * @param {number[]} arr - An array to be searched for maximum value.
 * 
 * @returns {number} The maximum element present in the array.
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

/**
 * @description Takes a string as input and returns the reversed version of that
 * string. It does this by splitting the input string into an array of individual
 * characters, reversing the order of the characters in the array, and then joining
 * the characters back together into a new string.
 * 
 * @param {string} str - Input to be reversed.
 * 
 * @returns {string} The input string with its characters reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description Checks whether a given string is a palindrome by comparing it with
 * its reversed version, which is obtained using the `reverseString` function. It
 * returns a boolean value indicating whether the input string is a palindrome or not.
 * 
 * @param {string} str - The input string to be checked for palindrome property.
 * 
 * @returns {boolean} True if the input string is equal to its reverse, and false otherwise.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description Generates a random integer within a specified range defined by the
 * input parameters `min` and `max`. The generated number is inclusive for both bounds,
 * meaning it can equal either `min` or `max` with an equal probability.
 * 
 * @param {number} min - Inclusive in the generated random range.
 * 
 * @param {number} max - 1 more than the maximum possible random number value.
 * 
 * @returns {number} A random integer within the range of `min` and `max` inclusive.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Calculates the area of a circle given its radius. It uses the
 * mathematical formula for the area of a circle (πr^2) and returns the result as a
 * value.
 * 
 * @param {number} radius - Used to calculate the area of a circle.
 * 
 * @returns {number} The area of a circle calculated using its radius.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description Aggregates the occurrences of each element in an array by using the
 * `reduce` method to create a new object with the elements as keys and their respective
 * counts as values.
 * 
 * @param {(string | number | boolean | object | symbol)[]} arr - An array to count
 * occurrences in.
 * 
 * @returns {any} An object where each property represents a unique value from the
 * input array and its corresponding property value is the number of occurrences of
 * that value in the array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Counts occurrences.

        // Counts occurrences in an array.

        // Counts occurrences.

        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description Capitalizes each word in a given `sentence`, splitting it into
 * individual words, applying the transformation to each word, and then joining them
 * back together with spaces.
 * 
 * @param {string} sentence - Intended for capitalization.
 * 
 * @returns {string} The input sentence with all its words capitalized at their first
 * letter and the rest as lowercase.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
