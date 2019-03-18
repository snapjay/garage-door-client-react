import React from 'react'
import {Button, Card} from 'react-bootstrap'
import API from '../Services/API'

const initialState = {}
type State = Readonly<typeof initialState>

class Lights extends React.Component<{}, State> {

    readonly api = new API()
    public state: State = initialState

    protected lightsOn = (): void => {
        this.api.lights(true)
    }
    protected lightsOff = (): void => {
        this.api.lights(false)
    }

    public render() {

        return (
            <Card className='CardLights'>
                <Card.Body>
                    <Card.Title>Lights</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        3 Lights
                    </Card.Subtitle>
                    <Button className='mr-2' variant="outline-secondary" onClick={this.lightsOn}>On</Button>
                    <Button variant="outline-secondary" onClick={this.lightsOff}>Off</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Lights
