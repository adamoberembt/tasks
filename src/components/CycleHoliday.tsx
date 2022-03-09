import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Valentines"
        | "Easter"
        | "Halloween"
        | "Thanksgiving"
        | "Christmas";
    const ALPHABET: Record<Holiday, Holiday> = {
        Christmas: "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Valentines",
        Valentines: "Christmas"
    };
    const DATE: Record<Holiday, Holiday> = {
        Christmas: "Valentines",
        Valentines: "Easter",
        Easter: "Halloween",
        Halloween: "Thanksgiving",
        Thanksgiving: "Christmas"
    };
    function changeByName(): void {
        const newHoliday = ALPHABET[holiday];
        setHoliday(newHoliday);
    }
    function chnageByDate(): void {
        const newHoliday = DATE[holiday];
        setHoliday(newHoliday);
    }
    const [holiday, setHoliday] = useState<Holiday>("Christmas");
    //const [holiday2, setHoliday2] = useState<Holiday>(false);
    return (
        <div>
            <Button onClick={changeByName}>Advance by Alphabet</Button>
            {holiday === "Christmas" ? (
                <span>Holiday: 🎄</span>
            ) : holiday === "Valentines" ? (
                <span>Holiday: 💖</span>
            ) : holiday === "Easter" ? (
                <span>Holiday: 🐇</span>
            ) : holiday === "Halloween" ? (
                <span>Holiday: 🎃</span>
            ) : (
                <span>Holiday: 🦃</span>
            )}
            <Button onClick={chnageByDate}>Advance by Year</Button>
        </div>
    );
}
