import React, {Component} from 'react'
import {Container, Row, Col, Navbar} from 'react-bootstrap'
import Status from './Components/Status'
import Alert from './Components/Alert'
import Lights from './Components/Lights'

class App extends Component {
    render() {
        return (

            <div>
                <Navbar bg="primary" variant="dark" expand={true}>
                    <Navbar.Brand>
                        {'Garage Door'}
                    </Navbar.Brand>
                </Navbar>
                <Container fluid={true}>
                    <Row>
                        <Col>
                            <header>
                                <h2></h2>
                            </header>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mb-4'>
                            <Status></Status>
                        </Col>
                        <Col className='mb-4'>
                            <Alert></Alert>
                        </Col>
                        <Col className='mb-4'>
                            <Lights></Lights>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App
