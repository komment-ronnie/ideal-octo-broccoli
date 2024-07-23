import React from 'react';
/**
 * @description Defines two custom functions, `add` and `sin`, for basic arithmetic
 * and trigonometric operations. It then uses these functions to generate an array
 * of results and renders them as a list within an HTML element.
 * 
 * @returns {number} 8 (the sum of 5 and 3) for the first item in the results array
 * and a floating point number near to 1 (the sine of π/2) for the second item.
 */
const MathComponent: React.FC = () => {
    /**
     * @description Takes two numeric arguments, `a` and `b`, and returns their sum as
     * an integer value. It is a simple arithmetic operation that combines the values of
     * both inputs into a single output.
     * 
     * @param {number} a - Added to another number `b`.
     * 
     * @param {number} b - Added to the value of `a`.
     * 
     * @returns {number} The result of the arithmetic operation performed on its input values.
     */
    function add(a: number, b: number): number {
        return a + b;
    }
    /**
     * @description Calculates and returns the sine of a given angle `a` in radians. The
     * result is a numeric value between -1 and 1, representing the trigonometric sine operation.
     * 
     * @param {number} a - An input angle for sine calculation.
     * 
     * @returns {number} The sine of the input angle `a`, represented as a mathematical
     * constant in radians.
     */
    function sin(a: number): number {
        return Math.sin(a);
    }
    const results = [
        add(5, 3),
        sin(Math.PI / 2)
    ];
    return (
        <div>
            <h1>Math Results</h1>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>Result {index + 1}: {result}</li>
                ))}
            </ul>
        </div>
    );
}

export default MathComponent;
