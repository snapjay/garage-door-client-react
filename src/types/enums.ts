export const SOCKET_STATUS = 'statusChange'
export const SOCKET_ALERT = 'alert'

export const ALERT_DEFS = {
    NIGHT_WATCH: {title: 'Night Watch', icon: 'bed'},
    DOOR_TRANSITION: {title: 'Stuck in Transition', icon: 'exclamation'},
    DOOR_OPEN: {title: 'Door Left Open', icon: 'lock-open'},
    HOME_ALONE: {title: 'Activated when no ones home', icon: 'house-damage'}
}

export const STATUS_DEFS = {
    TRANSITION: {title: 'Transition', icon: 'random'},
    OPEN: {title: 'Open', icon: 'door-open'},
    CLOSED: {title: 'Closed', icon: 'door-closed'},
    UNKNOWN: {title: 'Unknown', icon: 'question'}
}

export const LOG_DEFS = {
    STATUS_CHANGE : {title: 'Status Change', icon: 'exchange-alt'},
    ACTION: {title: 'Action', icon: 'running'},
    LIGHTS: {title: 'Lights', icon: 'lightbulb'},
    ALERT: {title: 'Alert', icon: 'bell'},
    ALL: {title: 'All', icon: 'bell'}
}

export const LIGHTS_DEFS = {
    ON: {title: 'On', icon: 'lightbulb'},
    OFF: {title: 'Off', icon: 'lightbulb'}
}

export enum LOG_TYPES {
    ALL = 'ALL',
    ACTION = 'ACTION',
    ALERT = 'ALERT',
    LIGHTS = 'LIGHTS',
    STATUS_CHANGE = 'STATUS_CHANGE'
}

export enum DOOR_STATUS {
    TRANSITION = 'TRANSITION',
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    UNKNOWN = 'UNKNOWN'
}

export enum LIGHT_STATUS {
    ON = 'ON',
    OFF = 'OFF',
}

export enum ALERT {
    HOME_ALONE = 'HOME_ALONE',
    DOOR_TRANSITION = 'DOOR_TRANSITION',
    NIGHT_WATCH = 'NIGHT_WATCH',
    DOOR_OPEN = 'DOOR_OPEN'
}

