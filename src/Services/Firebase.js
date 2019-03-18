import firebase from 'firebase'

// firebase.database().ref('alerts').once('value').then((n)=> console.log(n))
class Firebase {

    constructor() {
        const config = {
            apiKey: "AIzaSyB1Z14N6PLt1Wa7hcM5NjxsfWOHXKLBRxo",
            authDomain: "garage-door-9135e.firebaseapp.com",
            databaseURL: "https://garage-door-9135e.firebaseio.com",
            projectId: "garage-door-9135e",
            storageBucket: "",
            messagingSenderId: "366424174093"
        }

        firebase.initializeApp(config)
        this.Database = firebase.database()
        this.Logs = this.Database.ref('logs')
        this.Alerts = this.Database.ref('alerts')
    }

    getLogsRef() {
        return this.Logs
    }
  getAlertsRef() {
        return this.Alerts
    }
}

export default new Firebase()