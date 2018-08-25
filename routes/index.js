// we init our express app routes only
module.exports = () => {
  const express = require('express')
  const bodyParser = require('body-parser')
  const cors = require('cors')
  const TaskRoutes = require('./task-routes')
  let app = express()

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  // call all the inits
  let taskRoute = new TaskRoutes({app})
  taskRoute.init()

  app.listen(3000)
}
