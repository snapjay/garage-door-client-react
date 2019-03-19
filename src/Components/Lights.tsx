import React from 'react'
import {Button, Card} from 'react-bootstrap'
import API from '../Services/API'
import {STATUS_DEFS} from "../enums"

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
            <Card className='CardStatus'>
                <div>
                    <i className="card-img material-icons text-primary pl-3" style={{fontSize: '57px'}}>brightness_medium  </i>
                </div>
                <div>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Lights:</Card.Subtitle>
                        <div className='h1  text-primary'>3 Lights</div>
                        <Button className='mr-2' variant="outline-secondary" onClick={this.lightsOn}>On</Button>
                        <Button variant="outline-secondary" onClick={this.lightsOff}>Off</Button>
                    </Card.Body>
                </div>
            </Card>
        )
    }
}

export default Lights
