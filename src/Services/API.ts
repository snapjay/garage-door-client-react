import {ISocketResponse, IStatusCallback, IStatusResponse} from "../index"
import io  from 'socket.io-client'
import {DOOR_STATUS} from "../enums"

class API {

    readonly url: string = 'https://api.door.snapjay.com/'
    readonly socket = io(this.url)

    public getStatus(): Promise<IStatusResponse> {
        return this.request<IStatusResponse>('api/status')
    }

    public activate() {
        return this.request<IStatusResponse>('api/action')
    }

    public subscribeToStatus(cb: IStatusCallback) {
        console.log('SUB')
        this.socket.on('statusChange', (rsp: ISocketResponse) => {
            console.log('chnage', rsp)
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
