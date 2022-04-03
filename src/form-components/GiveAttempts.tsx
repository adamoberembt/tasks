import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<string>("");
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts Left: {attempts}</div>
            <span>
                <Button
                    onClick={() =>
                        attempts > 0
                            ? setAttempts(attempts - 1)
                            : setAttempts(attempts)
                    }
                    disabled={attempts < 1}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        isNaN(parseInt(requests))
                            ? setAttempts(attempts)
                            : setAttempts(attempts + parseInt(requests))
                    }
                >
                    gain
                </Button>
            </span>
            <Form.Group controlId="giveAttempts">
                <Form.Label>Add Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requests}
                    style={{
                        width: "fit-content",
                        margin: "auto"
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequests(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}
