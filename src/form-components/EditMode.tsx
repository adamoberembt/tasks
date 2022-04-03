import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface EditMode {
    setEditMode: (newMode: boolean) => void;
    editMode: boolean;
}

interface EditText {
    setEditText: (newEdit: string) => void;
    editText: string;
}

interface IsStudent {
    setIsStudent: (newStudent: boolean) => void;
    isStudent: boolean;
}

function UpdateMode({ editMode, setEditMode }: EditMode): JSX.Element {
    function updateEditMode(event: ChangeEvent) {
        setEditMode(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="edit-mode-check"
                label="Edit Mode?"
                checked={editMode}
                style={{
                    width: "fit-content",
                    margin: "auto"
                }}
                onChange={updateEditMode}
            />
        </div>
    );
}

function UpdateText({ editText, setEditText }: EditText): JSX.Element {
    function updateEditText(event: ChangeEvent) {
        setEditText(event.target.value);
    }
    return (
        <Form.Group controlId="formStudentName">
            <Form.Label>Enter Name:</Form.Label>
            <Form.Control
                value={editText}
                //display={true}
                style={{
                    width: "fit-content",
                    display: "-ms-inline-flexbox",
                    margin: "auto",
                    textAlign: "center"
                }}
                onChange={updateEditText}
            />
        </Form.Group>
    );
}

function UpdateStudent({ isStudent, setIsStudent }: IsStudent): JSX.Element {
    function updateIsStudent(event: ChangeEvent) {
        setIsStudent(event.target.checked);
    }
    return (
        <Form.Check
            type="checkbox"
            id="is-student-check"
            label="Student?"
            checked={isStudent}
            style={{
                width: "fit-content",
                margin: "auto"
            }}
            onChange={updateIsStudent}
        />
    );
}

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <UpdateMode
                editMode={editMode}
                setEditMode={setEditMode}
            ></UpdateMode>
            {editMode && (
                <div>
                    <UpdateText
                        editText={editText}
                        setEditText={setEditText}
                    ></UpdateText>
                    <UpdateStudent
                        isStudent={isStudent}
                        setIsStudent={setIsStudent}
                    ></UpdateStudent>
                </div>
            )}
            {editText} is {isStudent === true ? "a student" : "not a student"}
        </div>
    );
}
