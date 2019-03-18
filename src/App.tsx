import React, {Component} from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import Status from './Components/Status'
import Alert from './Components/Alert'
import Lights from './Components/Lights'

class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <header>
                            <h2>Garage Door</h2>
                        </header>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Status></Status>
                    </Col>
                    <Col>
                        <Alert></Alert>
                    </Col>
                    <Col>
                        <Lights></Lights>
                    </Col>
                </Row></Container>
        );
    }
}

export default App;
