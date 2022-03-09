import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [left, setLeft] = useState<number>(1);
    const [right, setRight] = useState<number>(6);
    function changeLeft(): void {
        setLeft(d6());
    }
    function changeRight(): void {
        setRight(d6());
    }
    return (
        <div>
            <Button onClick={changeLeft}>Roll Left</Button>
            <Button onClick={changeRight}>Roll Right</Button>
            The left die is <span data-testid="left-die">{left}</span>
            The right die is <span data-testid="right-die">{right}</span>
            {left !== right ? (
                <span>Keep Trying!</span>
            ) : left === 1 ? (
                <span>You Lose</span>
            ) : (
                <span>You Win</span>
            )}
        </div>
    );
}
