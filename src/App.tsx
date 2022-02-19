import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript - Adam Oberembt
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                automatically reload.
            </p>
            <h1>New Header (header text)</h1>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg"
                alt="Picture of a mountain"
                width="400"
                height="300"
            />
            <p>
                Class List:
                <ul>
                    <li>First class</li>
                    <li>second class</li>
                    <li>third class</li>
                </ul>
            </p>
            <p>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </p>
            <p>
                <Container>
                    <Row>
                        <Col>
                            <div
                                style={{
                                    height: "50px",
                                    width: "300px",
                                    backgroundColor: "red"
                                }}
                            >
                                First column
                            </div>
                        </Col>
                        <Col>
                            <div
                                style={{
                                    height: "100px",
                                    width: "200px",
                                    backgroundColor: "red"
                                }}
                            >
                                Second column
                            </div>
                        </Col>
                    </Row>
                </Container>
            </p>
        </div>
    );
}

export default App;
