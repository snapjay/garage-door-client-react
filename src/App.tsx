import React, { Component } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <header>
              <h2>Garage Door</h2>
            </header>
              <Card style={{ width: '18rem' }}>
                  <Card.Body>
                      <Card.Title>Garage Door Status</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted"> Status: n/a </Card.Subtitle>
                      <Button variant="primary">Activate</Button>
                  </Card.Body>
              </Card>
          </Col>
        </Row></Container>
    );
  }
}

export default App;
