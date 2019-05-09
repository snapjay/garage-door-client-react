import React from 'react'
import {Button, Card} from 'react-bootstrap'
import API from '../Services/API'
import {LOG_DEFS, STATUS_DEFS} from "../types/enums"
import Icon from "./Icon"

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
                    <Icon className='card-img text-primary pl-3 ' name={LOG_DEFS['LIGHTS'].icon} />
                </div>
                <div>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Lights:</Card.Subtitle>
                        <div className='h1 text-primary'>3 Lights</div>
                        <Button className='mr-2' variant="outline-secondary" onClick={this.lightsOn}>On</Button>
                        <Button variant="outline-secondary" onClick={this.lightsOff}>Off</Button>
                    </Card.Body>
                </div>
            </Card>
        )
    }
}

export default Lights
