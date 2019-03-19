import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import API from '../Services/API'
import {ISocketAlertResponse, IAlertState, IAlertItem, IAlertResponse,} from '../index'
import {ALERT, ALERT_DEFS, DOOR_STATUS} from '../enums'
import Firebase from '../Services/Firebase.js'
import {dateFormat} from "../Services/Utils"

const initialState: IAlertState = {
    alerts: []
}
type State = Readonly<typeof initialState>

class Alert extends React.Component<{}, State> {

    readonly api = new API()
    public state: State = initialState

    componentDidMount() {
        // Firebase.getAlertsRef().once('value').then((rsp) => {
        //     this.setState({
        //         alerts: rsp.val()
        //     })
        // })

        Firebase.onAlertUpdate((snapshot: IAlertItem[]) => {
            this.setState({
                alerts: snapshot
            })
        })
    }

    private listItem = (item: IAlertItem, index: number) => {
        return (
            <ListGroup.Item key={index}>
                <i className="material-icons mr-3 text-primary"> {ALERT_DEFS[item.alert].icon} {}</i>
                {ALERT_DEFS[item.alert].title}
               <div><small>{dateFormat(new Date(item.date))}</small></div>
            </ListGroup.Item>
        )
    }

    public render() {
        let showNoAlerts
        if (!this.state.alerts) {
            showNoAlerts = <div> No alerts </div>
        }
        return (
            <Card className='CardAlert'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {showNoAlerts}
                        <ListGroup>
                            {
                                this.state.alerts.map((item, index) => {
                                    return this.listItem(item, index)
                                })
                            }
                        </ListGroup>
                    </Card.Subtitle>
                </Card.Body>
            </Card>
        )
    }
}

export default Alert
