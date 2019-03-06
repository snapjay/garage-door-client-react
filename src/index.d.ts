import {ALERT, DOOR_STATUS} from "./enums"

export interface IStatusResponse {
    error: string
    status: DOOR_STATUS
}

export interface IStatusState {
    status: DOOR_STATUS
}

export interface IAlertState {
    alerts: ALERT[]
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