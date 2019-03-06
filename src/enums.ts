export const SOCKET_STATUS = 'statusChange'
export const SOCKET_ALERT = 'alert'

export const ALERT_DEFS = {
    NIGHT_WATCH: {title: 'Night Watch', icon: 'hotel'},
    DOOR_TRANSITION: {title: 'Door Stuck in Transition', icon: 'priority_high'},
    DOOR_OPEN: {title: 'Door Has been Left Open', icon: 'lock_open'},
    HOME_ALONE: {title: 'Door Activated when no ones home', icon: 'accessibility'}
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

