import React from 'react'
import {Col, Container, Row} from "react-bootstrap"
import Status from "./Status"
import Logs from "./Logs"
import Lights from "./Lights"

class Icon extends React.Component {
    render() {
        return (
            <Container fluid={true} >
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
                        <Logs></Logs>
                    </Col>
                    <Col className='mb-4'>
                        <Lights></Lights>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Icon
