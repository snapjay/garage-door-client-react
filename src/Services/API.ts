import {
    IAlertCallback,
    ISocketAlertResponse,
    ISocketStatusResponse,
    IStatusCallback,
    IStatusResponse,
} from "../index"
import io  from 'socket.io-client'
import {DOOR_STATUS, SOCKET_ALERT, SOCKET_STATUS} from "../enums"

class API {
    readonly url: string = 'https://api.door.snapjay.com/'
    readonly socket = io(this.url)

    public getStatus(): Promise<IStatusResponse> {
        return this.request<IStatusResponse>('api/status')
    }

    public activate() {
        return this.request<IStatusResponse>('api/action')
    }


    public lights(status: boolean) {
        if (status) {
            return this.request<IStatusResponse>('api/hue?state=on')
        } else {
            return this.request<IStatusResponse>('api/hue?state=off')
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
