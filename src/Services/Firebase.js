import firebase from 'firebase'
import {LOG_TYPES} from '../enums'

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
  }

  getLogsRef() {
    return this.Logs
  }

  onStatusUpdate(callback) {
    this.Logs.limitToLast(1).orderByChild("type").equalTo(LOG_TYPES.STATUS_CHANGE).on('value', (snapshot) => {
      let rsp = snapshot.val()
      let status = 'UNKNOWN'
      if (rsp) {
        status = rsp[Object.keys(rsp)[0]].value
      }
      callback(status)
    })
  }

  onLogUpdate(callback, filter = 'ALL', count = 50) {
    // eslint-disable-next-line
    let resource = this.Logs.limitToLast(count)
    if (filter !== 'ALL') {
      resource = resource.orderByChild("type").equalTo(filter)
    }
    resource = resource.on('value', (snapshot) => {
      let build = []
      let rsp = snapshot.val()
      if (rsp) {
        Object.keys(rsp).map((key, index) => build.unshift(rsp[key]))
      }
      callback(build)
    })
  }
}

export default new Firebase()
