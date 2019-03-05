
export interface IStatusResponse {
    error: string
    status: string
}

export interface IStatusState {
    status: string
}

export enum DOOR_STATUS {
    TRANSITION = 'transition',
    OPEN = 'open',
    CLOSED = 'closed'
}

