const AbstractRoute = require('./abstract-routes')
const TaskOrchestrator = require('../orchestrators').tasks

class TaskRoutes extends AbstractRoute {
  constructor ({app}) {
    super({app})
  }
  /* we init all the routes for the tasks and call the actions we want, in this case the processor, note there is a better way to do it
  */
  init () {
    this.app.get('/tasks', (req, res, next) => {
      let params = {
        init: {},
        data: this.processParams(req),
        module: 'tasks',
        klass: 'processor',
        method: 'getAll'
      }
      let taskOrchestrator = new TaskOrchestrator(params)
      taskOrchestrator.getAll()
        .then(tasks => {
          res.send({tasks})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.get('/tasks/:id', (req, res, next) => {
      let params = {
        init: {},
        data: this.processParams(req),
        module: 'tasks',
        klass: 'processor',
        method: 'get'
      }
      let taskOrchestrator = new TaskOrchestrator(params)
      taskOrchestrator.get()
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.post('/tasks/', (req, res, next) => {
      let params = {
        init: {},
        data: this.processParams(req),
        module: 'tasks',
        klass: 'processor',
        method: 'create'
      }
      let taskOrchestrator = new TaskOrchestrator(params)
      taskOrchestrator.create()
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
      let params = {
        init: {},
        data: this.processParams(req),
        module: 'tasks',
        klass: 'processor',
        method: 'update'
      }
      let taskOrchestrator = new TaskOrchestrator(params)
      taskOrchestrator.update()
        .then(task => {
          res.send({task})
        })
        .catch(err => {
          console.log(err)
          next(new Error(err))
        })
    })
    this.app.delete('/tasks/:id', (req, res, next) => {
      let params = {
        init: {},
        data: this.processParams(req),
        module: 'tasks',
        klass: 'processor',
        method: 'destroy'
      }
      let taskOrchestrator = new TaskOrchestrator(params)
      taskOrchestrator.destroy()
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
