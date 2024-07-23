import React from 'react';
/**
 * @description Defines two utility functions, `add` and `sin`, which perform arithmetic
 * operations on numbers. The component then calls these functions with specific
 * arguments to generate an array of results, which are displayed as a list of items
 * within a `<div>` element.
 * 
 * @returns {number | number} 8 and approximately 1.5707963267948966.
 */
const MathComponent: React.FC = () => {
    /**
     * @description Takes two numeric parameters `a` and `b`, performs an arithmetic
     * addition operation on them, and returns the result as a number. It allows combining
     * two numerical values into one.
     * 
     * @param {number} a - Used to represent an input value for addition.
     * 
     * @param {number} b - Intended to be added to `a`.
     * 
     * @returns {number} The result of adding two input numbers together.
     */
    function add(a: number, b: number): number {
        return a + b;
    }
    /**
     * @description Calculates the sine of a given angle `a` and returns the result as a
     * numerical value. It utilizes the built-in `Math.sin` method to perform the
     * calculation, taking the input `a` as an argument.
     * 
     * @param {number} a - An angle to be used for calculating sine.
     * 
     * @returns {number} The sine of the given angle.
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
