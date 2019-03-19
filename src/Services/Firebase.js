import firebase from 'firebase'

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

  onAlertUpdate(callback, count = 5) {
    this.Alerts.limitToLast(count).on('value', (snapshot) => {
      let build = []
      let rsp = snapshot.val()
      Object.keys(rsp).map((key, index) => build.unshift(rsp[key])
      )
      callback(build)
    })
  }
  onLogUpdate(callback, count = 50) {
    this.Logs.limitToLast(count).on('value', (snapshot) => {
      let build = []
      let rsp = snapshot.val()
      Object.keys(rsp).map((key, index) => build.unshift(rsp[key])
      )
      callback(build)
    })
  }
}

export default new Firebase()
