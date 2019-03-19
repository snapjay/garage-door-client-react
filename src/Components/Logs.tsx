import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'
import {ILogState, ILogItem,} from '../index'
import {LOG_DEFS} from '../enums'
import Firebase from '../Services/Firebase.js'
import {dateFormat} from "../Services/Utils"

const initialState: ILogState = {
    logs: []
}
type State = Readonly<typeof initialState>

class Logs extends React.Component<{}, State> {

    public state: State = initialState

    componentDidMount() {
        Firebase.onLogUpdate((snapshot: ILogItem[]) => {
            this.setState({
                logs: snapshot
            })
        })
    }

    private listItem = (item: ILogItem, index: number) => {
        return (
            <ListGroup.Item key={index} className='item'>
                <div>
                    <i className="material-icons mr-3 text-primary"> {LOG_DEFS[item.type].icon} {}</i>
                </div>
               <div>
                   {LOG_DEFS[item.type].title}
                   <div> <small>{item.value}</small></div>
                   <small>{dateFormat(new Date(item.date))}</small></div>
            </ListGroup.Item>
        )
    }

    public render() {
        let showNoAlerts
        if (!this.state.logs) {
            showNoAlerts = <div> No logs </div>
        }
        return (
            <Card className='CardAlert'>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">
                        {showNoAlerts}
                        <ListGroup>
                            {
                                this.state.logs.map((item, index) => {
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

export default Logs
