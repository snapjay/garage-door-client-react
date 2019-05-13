import firebase from 'firebase'
import {LOG_TYPES} from '../types/enums'

class Firebase {

  constructor() {
    const config = {
      apiKey: "AIzaSyB1Z14N6PLt1Wa7hcM5NjxsfWOHXKLBRxo",
      authDomain: "garage-door-9135e.firebaseapp.com",
      // databaseURL: "https://garage-door-9135e.firebaseio.com",
      projectId: "garage-door-9135e",
      // storageBucket: "",
      // messagingSenderId: "366424174093"
    }

    firebase.initializeApp(config)
    this.db = firebase.firestore()
    this.logsCollection = this.db.collection('logs')
  }

  getLogsRef() {
    return this.logsCollection
  }

  onStatusUpdate(callback) {
    this.logsCollection.limit(1).orderBy('created', 'desc').where("type", '==', LOG_TYPES.STATUS_CHANGE).onSnapshot((snapshot) => {
      let status = 'UNKNOWN'
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          status = (doc.data()['value'])
        })
        callback(status)
      }
    })
  }

  onLogUpdate(callback, filter = 'ALL', count = 50) {
    // eslint-disable-next-line
    let resource = this.logsCollection
    if (filter !== 'ALL') {
      resource = resource.where("type", '==', filter)
    }
    resource = resource.limit(count).orderBy('created', 'desc').onSnapshot((snapshot) => {
      let build = []
      snapshot.forEach((doc) => {
        let row = doc.data()
        build.push(row)
      })
      callback(build)
    })
  }
}

export default new Firebase()
