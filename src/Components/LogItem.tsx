import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {ILogItem} from "../types"
import {dateFormat} from "../Services/Utils"
import {ALERT_DEFS, LIGHTS_DEFS, LOG_DEFS, LOG_TYPES, STATUS_DEFS} from "../types/enums"
import Icon from "./Icon"


type Props = {
    item: ILogItem
}

class LogItem extends React.Component<Props> {

    getIcon = (item: ILogItem): {icon:string, title:string} => {
        let icon = LOG_DEFS[item.type].icon
        let title = LOG_DEFS[item.type].title
        if (item.type === LOG_TYPES.ALERT) {
            icon = ALERT_DEFS[item.value].icon
            title = ALERT_DEFS[item.value].title
        } else if (item.type === LOG_TYPES.STATUS_CHANGE) {
            icon = STATUS_DEFS[item.value].icon
            title = STATUS_DEFS[item.value].title
        } else if (item.type === LOG_TYPES.LIGHTS) {
            icon = LIGHTS_DEFS[item.value].icon
            title = LIGHTS_DEFS[item.value].title
        }
        return {icon, title}
    }

    render() {
        return (
            <ListGroup.Item className='item'>
                <div>
                    <Icon className='mr-3 text-primary' name={this.getIcon(this.props.item).icon} />
                </div>
                <div>
                    <Icon className='mr-3 text-primary logicon' name={LOG_DEFS[this.props.item.type].icon} />
                    <div className='text-primary'>{this.getIcon(this.props.item).title}</div>
                    <small className='d-block'>{LOG_DEFS[this.props.item.type].title}</small>
                    <small>{dateFormat(new Date(this.props.item.date))}</small>
                </div>
            </ListGroup.Item>
        )
    }
}

export default LogItem
