import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "green",
        "orange",
        "blue",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    type ChangeEvent = React.ChangeEvent<
        HTMLTextAreaElement | HTMLInputElement
    >;
    function updateColor(event: ChangeEvent) {
        setColor(event.target.value);
    }
    const [colorX, setColor] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color: string) => (
                <Form.Check
                    key={color}
                    value={color}
                    inline
                    type="radio"
                    id="choose color"
                    label={color}
                    name="color"
                    checked={color === colorX}
                    onChange={updateColor}
                    style={{ backgroundColor: color }}
                ></Form.Check>
            ))}
            <div>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: colorX }}
                >
                    {colorX}
                </span>
            </div>
        </div>
    );
}
