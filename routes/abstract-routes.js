class AbstractRoutes {
  constructor ({app}) {
    this.app = app
  }
  // PLS PLS add other stuff we are missing like files or headers that come from the request if needed
  processParams (req) {
    return Object.assign({}, req.body, req.params, req.query)
  }
  // all routes must implmement the init and it init the routes that it should, ex: task will init all tasks routes
  init () {
    throw new Error('need to implement the init of the routes')
  }
}

module.exports = AbstractRoutes
