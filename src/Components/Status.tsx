import React, {Component} from 'react';
import { Button, Card} from 'react-bootstrap';
import API from '../Services/API'
import {IStatusResponse, IStatusState, DOOR_STATUS} from "../index"

const initialState: IStatusState = {
    status: 'unknown',
}
type State = Readonly<typeof initialState>

class Status extends  React.Component<{}, State>  {

    readonly state: State = initialState
    componentDidMount() {
        const api = new API()
        const a = api.getStatus().then((rsp: IStatusResponse) => {
            this.setState({status: rsp.status})
        })
    }

    render() {

        return (
            <Card>
                <Card.Body>
                    <Card.Title>Garage Door Status</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> Status: { this.state.status } </Card.Subtitle>
                    <Button variant="primary">Activate</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Status;
