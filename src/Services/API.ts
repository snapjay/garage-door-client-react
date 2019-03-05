import {IStatusResponse} from "../index"

class API {

    readonly url: string = 'https://api.door.snapjay.com/api/'

    public getStatus(): Promise<IStatusResponse> {
        return this.requestStatus<IStatusResponse>()
    }

    private requestStatus<T>(): Promise<T> {
        return fetch(`${this.url}status`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json().then(data => data as T)
            })
    }
}


export default API
