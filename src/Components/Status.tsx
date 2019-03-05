import React, {Component} from 'react';
import { Button, Card} from 'react-bootstrap';
import API from '../Services/API'
import {IStatusResponse, IStatusState, DOOR_STATUS} from "../index"

const initialState: IStatusState = {
    status: 'unknown',
}
type State = Readonly<typeof initialState>

class Status extends  React.Component<{}, State>  {


    readonly api = new API()
    readonly state: State = initialState
    componentDidMount() {
        const a = this.api.getStatus().then((rsp: IStatusResponse) => {
            this.setState({status: rsp.status})
        })
    }

    protected activate = (): void => {
        this.api.activate()
}

    public render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Garage Door Status</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> Status: { this.state.status } </Card.Subtitle>
                    <Button variant="primary" onClick={this.activate}>Activate</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Status;
