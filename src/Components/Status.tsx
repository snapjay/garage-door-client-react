import React, {Component} from 'react'
import {Button, Card} from 'react-bootstrap'
import API from '../Services/API'
import {ILogItem, ISocketStatusResponse, IStatusResponse, IStatusState} from '../index'
import {STATUS_DEFS, DOOR_STATUS, LOG_DEFS, LOG_TYPES} from '../enums'
import Icon from './Icon'
import Firebase from '../Services/Firebase'

const initialState: IStatusState = {
    status: DOOR_STATUS.UNKNOWN
}

type State = Readonly<typeof initialState>

class Status extends React.Component<{}, State> {

    readonly api = new API()
    readonly state: State = initialState

    componentDidMount() {
        Firebase.onStatusUpdate((status: DOOR_STATUS) => {
            this.setState({ status})
        })
    }

    protected activate = (): void => {
        this.api.activate()
    }

    public render() {
        return (
            <Card className='CardStatus'>
                    <div>
                        <Icon className='card-img material-icons text-primary pl-3' name={STATUS_DEFS[this.state.status].icon} />
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
