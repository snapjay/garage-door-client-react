import {ALERT, DOOR_STATUS, LOG_TYPES} from "./enums"

export interface IStatusResponse {
    error: string,
    status: DOOR_STATUS
}

export interface IStatusState {
    status: DOOR_STATUS
}
export interface IAppState {
    user?: {
        displayName?: string,
        email?: string,
        photoURL?: string,
        uid?: string,
        accessToken?: string
    }
}

export interface IAlertItem {
    alert: ALERT,
    created: FirebaseFirestore.Timestamp
}
export interface ILogItem {
    type: LOG_TYPES,
    value: string | DOOR_STATUS | ALERT,
    created: FirebaseFirestore.Timestamp
}

export interface IAlertResponse {
    [id: string]: IAlertItem
}

export interface IAlertState {
    alerts: IAlertItem[]
}
export interface ILogState {
    logs: ILogItem[],
    count: number,
    filter: LOG_TYPES
}

export interface ISocketStatusResponse {
    status: DOOR_STATUS
}

export interface ISocketAlertResponse {
    status: ALERT
}

export interface IStatusCallback {
    (err:null, rsp: ISocketStatusResponse) :void
}

export interface IAlertCallback {
    (err:null, rsp: ISocketAlertResponse) :void
}
