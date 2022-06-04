var events = require('events')
var eventEmitter = new events.EventEmitter()

class ObserverService {
  constructor () {
    this.listObserver = []
  }

  on (key, func) {
    eventEmitter.on(key, func)
  }

  emit (key, object) {
    eventEmitter.emit(key, object)
  }

  removeListener (key, func) {
    eventEmitter.removeListener(key, func)
  }
}

const Observer = new ObserverService()
Object.freeze(Observer)

export default Observer
