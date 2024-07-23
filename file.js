
/**
 * @description Calculates the factorial of a given positive integer `n`, recursively
 * multiplying it by `n-1` until reaching 0 or 1, at which point it returns 1. The
 * result is the product of all positive integers up to and including `n`.
 * 
 * @param {number} n - Intended to calculate the factorial of this number.
 * 
 * @returns {number} 1 when n equals 0 or 1, and otherwise it returns a product of
 * the input number n with the factorial of (n - 1).
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
/**
 * @description Determines whether a given number is prime or not. It returns `false`
 * for numbers less than or equal to 1, and iterates from 2 up to the square root of
 * the input number to check if it has any divisors other than 1 and itself.
 * 
 * @param {number} num - Being checked for primality.
 * 
 * @returns {boolean} Either `true` if the input number is a prime number or `false`
 * otherwise.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description Converts a given Celsius temperature into Fahrenheit. It takes an
 * input `celsius` and returns the equivalent Fahrenheit value by performing simple
 * arithmetic operations: multiplying by 9, dividing by 5, and adding 32.
 * 
 * @param {number} celsius - The temperature to be converted from Celsius.
 * 
 * @returns {number} 9/5 times the input celsius temperature plus 32. This result
 * represents the equivalent Fahrenheit temperature.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description Identifies and returns the maximum value from a given array. It
 * initializes the variable `max` with the first element of the array, then iterates
 * through the remaining elements to update `max` if any element is greater.
 * 
 * @param {number[]} arr - An array of numbers to find the maximum value from.
 * 
 * @returns {number} The largest element from a given array.
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
 * @description Splits a given string into an array of characters, reverses the order
 * of these characters, and then joins them back together to form a new string with
 * the original characters in reverse order.
 * 
 * @param {string} str - Intended for string reversal.
 * 
 * @returns {string} The input string with its characters reversed.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description Checks if a given string is a palindrome by comparing it with its
 * reversed version, returned by the `reverseString` function. If both strings are
 * identical, the function returns `true`, indicating that the input string is a
 * palindrome. Otherwise, it returns `false`.
 * 
 * @param {string} str - Input to be checked for palindrome.
 * 
 * @returns {boolean} True if the input string is a palindrome and false otherwise,
 * indicating whether the string reads the same backward as forward.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description Generates a random integer within a specified range defined by `min`
 * and `max`. It calculates the random number using `Math.random()`, scales it to fit
 * within the range, and then adds the minimum value to ensure inclusivity of both boundaries.
 * 
 * @param {number} min - The minimum value for random generation.
 * 
 * @param {number} max - Maximum value for generating random number.
 * 
 * @returns {number} A random integer within a range from `min` to `max` inclusive.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description Calculates the area of a circle given its radius, using the mathematical
 * formula A = πr^2, where r is the radius and A is the area. The result is returned
 * as a value to the caller.
 * 
 * @param {number} radius - Used to determine the circle's area.
 * 
 * @returns {number} 2πr where r is the radius of a circle and π is a mathematical
 * constant approximately equal to 3.14159.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description Takes an array as input and returns an object where each property is
 * a unique element from the array, and its value is the number of times that element
 * occurs in the array.
 * 
 * @param {(string | number | boolean | symbol | object | null | undefined)[]} arr -
 * Intended to hold an array of values.
 * 
 * @returns {any} An object where keys are elements from the input array and values
 * represent their occurrences in the array.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        // Counts array elements' occurrences.

        // Counts occurrences.

        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description Splits a given sentence into individual words, capitalizes the first
 * character of each word while preserving the rest of the word, and then joins the
 * words back together with spaces to form the original sentence but with capitalized
 * words.
 * 
 * @param {string} sentence - Input text to be processed.
 * 
 * @returns {string} The input sentence with each word capitalized except for its
 * first character, and all words separated by a single space.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
