// imports


/**
* ROUTER
*/

module.exports = Backbone.Router.extend({
  initialize() {
    // initialize models and views
    let user_model = new UserModel()

    this.profile_view = new UserProfileView({
      model: user_model,
      el: document.getElementById('profile')
    })

    // initialize event listeners

  },

  routes: {
    '': 'userProfile'
  },

  /**
  * Route events (toggle views)
  */


})
