const AbstractRoute = require('./abstract-routes')
const TasksProcessor = require('../modules').tasks.processor

class TaskRoutes extends AbstractRoute {
  constructor ({app}) {
    super({app})
  }
  /* we init all the routes for the tasks and call the actions we want, in this case the processor, note there is a better way to do it
  */
  init () {
    this.app.get('/tasks', (req, res, next) => {
      let tasksProcessor = new TasksProcessor()
      tasksProcessor.getAll()
        .then(tasks => {
          res.send({tasks})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.get('/tasks/:id', (req, res, next) => {
      let tasksProcessor = new TasksProcessor()
      tasksProcessor.get(this.processParams(req))
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.post('/tasks/', (req, res, next) => {
      let tasksProcessor = new TasksProcessor()
      tasksProcessor.create(this.processParams(req))
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    // pls add a middlesware that get all params,
    this.app.put('/tasks/:id', (req, res, next) => {
      let tasksProcessor = new TasksProcessor()
      tasksProcessor.update(this.processParams(req))
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.delete('/tasks/:id', (req, res, next) => {
      let tasksProcessor = new TasksProcessor()
      tasksProcessor.destroy(this.processParams(req))
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
  }
}

module.exports = TaskRoutes
