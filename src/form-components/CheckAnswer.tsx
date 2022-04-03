import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [name, setName] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group
                controlId="checkAnswer"
                style={{
                    width: "fit-content",
                    margin: "auto"
                }}
            >
                <Form.Control value={name} onChange={updateName} />
            </Form.Group>
            <div>The answer is {name === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
