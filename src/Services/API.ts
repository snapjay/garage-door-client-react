import {IStatusResponse} from "../index"

class API {

    readonly url: string = 'https://api.door.snapjay.com/api/'

    public getStatus(): Promise<IStatusResponse> {
        return this.request<IStatusResponse>('status')
    }

    public activate() {
        return this.request<IStatusResponse>('action')
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
