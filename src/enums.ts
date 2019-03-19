export const SOCKET_STATUS = 'statusChange'
export const SOCKET_ALERT = 'alert'

export const ALERT_DEFS = {
    NIGHT_WATCH: {title: 'Night Watch', icon: 'hotel'},
    DOOR_TRANSITION: {title: 'Stuck in Transition', icon: 'priority_high'},
    DOOR_OPEN: {title: 'Door Left Open', icon: 'lock_open'},
    HOME_ALONE: {title: 'Activated when no ones home', icon: 'accessibility'}
}

export const STATUS_DEFS = {
    transition: {title: 'Transition', icon: 'thumbs_up_down'},
    open: {title: 'Open', icon: 'thumb_up'},
    closed: {title: 'Closed', icon: 'thumb_down'},
    unknown: {title: 'Unknown', icon: 'device_unknown'}
}

export const LOG_DEFS = {
    STATUS_CHANGE : {title: 'Status Change', icon: 'transfer_within_a_station'},
    ACTION: {title: 'Action', icon: 'directions_run'},
    LIGHTS: {title: 'Lights', icon: 'brightness_low'},
    ALERT: {title: 'Alert', icon: 'notification_important'}
}

export enum LOG_TYPES {
    STATUS_CHANGE = 'STATUS_CHANGE',
    ACTION = 'ACTION',
    LIGHTS = 'LIGHTS',
    ALERT = 'ALERT'
}

export enum DOOR_STATUS {
    TRANSITION = 'transition',
    OPEN = 'open',
    CLOSED = 'closed',
    UNKNOWN = 'unknown'
}

export enum ALERT {
    HOME_ALONE = 'HOME_ALONE',
    DOOR_TRANSITION = 'DOOR_TRANSITION',
    NIGHT_WATCH = 'NIGHT_WATCH',
    DOOR_OPEN = 'DOOR_OPEN'
}

