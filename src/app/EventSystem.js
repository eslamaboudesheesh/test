class EventSystem {
    constructor () {
      this.queue = {}
    }
  
    publish (event, data, keepSubscription = false) {
      const queue = this.queue[event]
  
      if (typeof queue === 'undefined') {
        return false
      }
      if (keepSubscription) {
        queue.forEach(callback => {
          callback(data)
        })
      } else {
        while (queue.length > 0) {
          (queue.shift())(data)
        }
      }
  
      return true
    }
  
    subscribe (event, callback, keepSubscription = false) {
      if (!keepSubscription || this.queue[event] === undefined) { this.queue[event] = [] }
      this.queue[event].push(callback)
    }
  
    //  the callback parameter is optional. Without it the whole event will be removed, instead of
    // just one subscibtion. Enough for simple implementations
    unsubscribe (event, callback) {
      const queue = this.queue
  
      if (typeof queue[event] !== 'undefined') {
        if (typeof callback === 'undefined') {
          delete queue[event]
        } else {
          this.queue[event] = queue[event].filter(function (sub) {
            return sub !== callback
          })
        }
      }
    }
  }
  
  module.exports = new EventSystem()