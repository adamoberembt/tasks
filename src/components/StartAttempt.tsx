import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [startStop, setStartStop] = useState<string>("stop");
    //const []
    const [attempts, setAttempts] = useState<number>(4);
    function startTest(): void {
        if (startStop === "stop") {
            setStartStop("start");
            if (attempts > 0) {
                removeAttempt();
            }
        }
    }
    function stopTest(): void {
        if (startStop === "start") {
            setStartStop("stop");
        }
    }
    function addAttempt(): void {
        setAttempts(attempts + 1);
    }
    function removeAttempt(): void {
        setAttempts(attempts - 1);
    }
    return (
        <div>
            <Button
                onClick={startTest}
                disabled={startStop === "start" || attempts === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={stopTest} disabled={startStop === "stop"}>
                Stop Quiz
            </Button>
            <Button onClick={addAttempt} disabled={startStop === "start"}>
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
