import React, {FormEvent, SyntheticEvent} from 'react'
import {Card, Dropdown, DropdownButton, ListGroup, Button } from 'react-bootstrap'
import {ILogState, ILogItem} from '../types'
import {LOG_DEFS, LOG_TYPES} from '../types/enums'
import Firebase from '../Services/Firebase.js'
import LogItem from "./LogItem"

const initialState: ILogState = {
    logs: [],
    count: 5,
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
        }, filter, this.state.count)
    }

    private handleChange = (eventKey:LOG_TYPES): void => {
        this.setState({filter: eventKey, count: 5}, () => {
            this.updateLogs(eventKey)
        })
    }

    private showMore = (): void => {
        this.setState((state) => {
            return {count: state.count + 5}
        }, () => {
            this.updateLogs(this.state.filter)
        })
    }

    public render() {
        let showNoLogs
        if (!this.state.logs.length) {
            showNoLogs = <div className='mt-4 font-italic font-weight-light text-black-50'> No {LOG_DEFS[this.state.filter].title} logs </div>
        }
        return (
            <Card className='CardAlert'>
                <Card.Body>
                    <DropdownButton id='select' className='mb-3' variant='outline-secondary' onSelect={this.handleChange} title={LOG_DEFS[this.state.filter].title}>
                        {
                            Object.keys(LOG_TYPES).map(type => (
                                <Dropdown.Item eventKey={type} key={type}>{LOG_DEFS[type].title}</Dropdown.Item>
                                )
                            )
                        }
                    </DropdownButton>
                    <Card.Subtitle className="mb-2 text-muted">
                        {showNoLogs}
                        <ListGroup>
                            {
                                this.state.logs.map((item, index) => <LogItem item={item } key={index}></LogItem>)
                            }
                        </ListGroup>
                    </Card.Subtitle>
                    <Button variant="outline-secondary" onClick={this.showMore}>Show More</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Logs
