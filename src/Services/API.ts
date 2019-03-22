import {
    IAlertCallback,
    ISocketAlertResponse,
    ISocketStatusResponse,
    IStatusCallback,
    IStatusResponse,
} from "../index"
import io  from 'socket.io-client'
import {LIGHT_STATUS, SOCKET_ALERT, SOCKET_STATUS} from "../enums"

export enum METHOD {
    STATUS = 'status',
    ACTION = 'action',
    LIGHTS = 'hue',
}

class API {
    readonly url: string = 'https://api.door.snapjay.com/api/'
    readonly socket = io(this.url)

    public getStatus(): Promise<IStatusResponse> {
        return this.request<IStatusResponse>(METHOD.STATUS)
    }

    public activate() {
        return this.request<IStatusResponse>(METHOD.ACTION)
    }


    public lights(status: boolean) {
        if (status) {
            return this.request<IStatusResponse>(`${METHOD.LIGHTS}?state=${LIGHT_STATUS.ON}` )
        } else {
            return this.request<IStatusResponse>(`${METHOD.LIGHTS}?state=${LIGHT_STATUS.OFF}` )
        }
    }

    public subscribeToStatus(cb: IStatusCallback) {
        this.socket.on(SOCKET_STATUS, (rsp: ISocketStatusResponse) => {
            cb(null, rsp)
        })
    }

    public subscribeToAlert(cb: IAlertCallback) {
        this.socket.on(SOCKET_ALERT, (rsp: ISocketAlertResponse) => {
            cb(null, rsp)
        })
    }

    private request<T>(method: string): Promise<T> {
        return fetch(`${this.url}${method}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json().then(data => data as T)
            })
    }
}

export default API
