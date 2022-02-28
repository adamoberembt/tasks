import { GapValue } from "react-bootstrap/esm/types";

/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const numbersNew = [...numbers];
    if (numbersNew.length < 1) {
        return numbersNew;
    } else if (numbersNew.length < 2) {
        const numbersNew2 = [...numbersNew];
        const numbersNew3 = numbersNew.concat(numbersNew2);
        return numbersNew3;
    } else {
        const first = numbersNew[0];
        const last = numbersNew[numbersNew.length - 1];
        //const numbersNew4 = first.concat(last);
        //const x = numbersNew.length - 2;
        //const numbersNew4 = numbersNew.splice(1, x);
        return [first, last];
    }

    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((value: number): number => value * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const arr = numbers.map(Number);
    const arr2 = arr.map((value: number): number => (isNaN(value) ? 0 : value));
    return arr2;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const arr = amounts.map((value: string): string =>
        value.startsWith("$") ? value.substring(1) : value
    );
    const arr2 = arr.map(Number);
    const arr3 = arr2.map((value: number): number =>
        isNaN(value) ? 0 : value
    );
    return arr3;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const arr = messages.map((value: string): string =>
        value.endsWith("!") ? value.toUpperCase() : value
    );
    const arr2 = arr.filter((value: string): boolean => !value.endsWith("?"));
    return arr2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((value: string): boolean => value.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const arr = colors.filter(
        (value: string): boolean => !value.startsWith("red")
    );
    const arr1 = arr.filter(
        (value: string): boolean => !value.startsWith("blue")
    );
    const arr2 = arr1.filter(
        (value: string): boolean => !value.startsWith("green")
    );
    if (arr2.length === 0) {
        return true;
    }
    return false;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const equation = addends.map((num: number): string => num.toString());
    return sum.toString() + "=" + equation.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const less0 = (element: number) => element < 0;
    const neww = [...values];
    const negative = neww.findIndex(less0);
    const temp = neww.slice(0, negative);
    const tempp5 = neww.slice(negative + 1);
    const sum = temp.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (negative < 0) {
        const sum = neww.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        const final = [...neww, sum];
        return final;
    } else {
        const temp2 = [...temp, values[negative], sum];
        const temp4 = temp2.concat(tempp5);
        //const temp2 = values;
        return temp4;
    }
}
