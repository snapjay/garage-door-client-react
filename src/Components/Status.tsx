import React, {Component} from 'react'
import {Button, Card} from 'react-bootstrap'
import API from '../Services/API'
import {ISocketStatusResponse, IStatusResponse, IStatusState} from "../index"
import {ALERT_DEFS, STATUS_DEFS, DOOR_STATUS} from "../enums"

const initialState: IStatusState = {
    status: DOOR_STATUS.UNKNOWN
}
type State = Readonly<typeof initialState>

class Status extends React.Component<{}, State> {

    readonly api = new API()
    readonly state: State = initialState

    componentDidMount() {
        const a = this.api.getStatus().then((rsp: IStatusResponse) => {
            this.setState({status: rsp.status})
        })

        this.api.subscribeToStatus((err, rsp: ISocketStatusResponse) => this.setState({
            status: rsp.status
        }))
    }

    protected activate = (): void => {
        this.api.activate()
    }

    public render() {
        return (
            <Card className='CardStatus'>
                    <div>
                        <i className="card-img material-icons text-primary pl-3" style={{fontSize: '57px'}}> { STATUS_DEFS[this.state.status].icon} </i>
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-muted">Status:</Card.Subtitle>
                            <div className='h1  text-primary'>{ STATUS_DEFS[this.state.status].title}</div>
                            <Button variant="outline-secondary" className='mt-3' onClick={this.activate}>Activate</Button>
                        </Card.Body>
                    </div>
            </Card>
        )
    }
}

export default Status
