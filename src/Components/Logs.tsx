import React, {FormEvent, SyntheticEvent} from 'react'
import {Card, Dropdown, DropdownButton, ListGroup} from 'react-bootstrap'
import {ILogState, ILogItem,} from '../index'
import {LOG_DEFS, LOG_TYPES} from '../enums'
import Firebase from '../Services/Firebase.js'
import {dateFormat} from "../Services/Utils"

const initialState: ILogState = {
    logs: [],
    filter: LOG_TYPES.ALERT
}
type State = Readonly<typeof initialState>

class Logs extends React.Component<{}, State> {

    public state: State = initialState

    componentDidMount() {
        this.updateLogs(LOG_TYPES.ALERT)
    }

    private updateLogs = (filter: LOG_TYPES) => {
        Firebase.onLogUpdate((snapshot: ILogItem[]) => {
            this.setState({
                logs: snapshot
            })
        }, filter)
    }

    private listItem = (item: ILogItem, index: number) => {
        return (
            <ListGroup.Item key={index} className='item'>
                <div>
                    <i className="material-icons mr-3 text-primary"> {LOG_DEFS[item.type].icon} {}</i>
                </div>
                <div>
                    {LOG_DEFS[item.type].title}
                    <div>
                        <small>{item.value}</small>
                    </div>
                    <small>{dateFormat(new Date(item.date))}</small>
                </div>
            </ListGroup.Item>
        )
    }

    private handleChange = (eventKey:LOG_TYPES): void => {
        this.setState({filter: eventKey})
        this.updateLogs(eventKey)
    }

    public render() {
        let showNoAlerts
        if (!this.state.logs) {
            showNoAlerts = <div> No logs </div>
        }
        return (
            <Card className='CardAlert'>
                <Card.Body>
                    <DropdownButton id='select' className='mb-3' variant='outline-secondary' onSelect={this.handleChange} title={LOG_DEFS[this.state.filter].title} >
                        {
                            Object.keys(LOG_TYPES).map(type => (
                                <Dropdown.Item eventKey={type} key={type}>{LOG_DEFS[type].title}</Dropdown.Item>))
                        }

                    </DropdownButton>

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
