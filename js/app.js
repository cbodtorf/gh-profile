/**
* Caleb Bodtorf
* 10-18-16
*/


let Router = require('./router')

window.addEventListener('load', () => {
  console.log("And it begins...")

  let router = new Router()

  Backbone.history.start()
})
