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

/**
* Access token:
*
* 7fd7ee8c9d836f9754f5c09cdd526f444ed2d317
*
*/
