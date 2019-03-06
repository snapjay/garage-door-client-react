import {DOOR_STATUS} from "./enums"

export interface IStatusResponse {
    error: string
    status: DOOR_STATUS
}

export interface IStatusState {
    status: DOOR_STATUS
}

export interface ISocketResponse {
    status: DOOR_STATUS
}

export interface IStatusCallback {
    (err:null, status: ISocketResponse) :void
}