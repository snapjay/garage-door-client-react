import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import API from '../Services/API'
import {ISocketAlertResponse, IAlertState,} from "../index"
import {ALERT, ALERT_DEFS} from "../enums"

const initialState: IAlertState = {
    alerts: []
}
type State = Readonly<typeof initialState>

class Alert extends React.Component<{}, State> {

    readonly api = new API()
    public state: State = initialState

    componentDidMount() {
        this.api.subscribeToAlert((err, rsp: ISocketAlertResponse) => {
            this.setState((state) => {
                state.alerts.unshift(rsp.status)
                return {
                    alerts: state.alerts
                }
            })
        })
    }

    private listItem = (item: ALERT, index:number) => {
        return (
            <ListGroup.Item key={index}>
                <i className="material-icons mr-3"> {ALERT_DEFS[item].icon} {  }</i>
                {ALERT_DEFS[item].title}
            </ListGroup.Item>
        )
    }

    public render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>Alerts</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        <ListGroup>
                            {this.state.alerts.map((item, index) => this.listItem(item, index))}
                        </ListGroup>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}

export default Alert
