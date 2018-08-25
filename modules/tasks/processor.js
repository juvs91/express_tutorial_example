const AbstractProcessor = require('../abstract-processor')
/* it query all the stuff form the DB, note the JOB for the processor is process all the data between app and DB
   note that we are extending the AbstractProcessor and passing {modelName: 'Task', requestDiscriminationData: {}}
   in order to know which class is being called for more functionality that needs to be added in a higher level of abstraction
   also this.models will contain all the models so you can acces them
*/
class TasksProcessor extends AbstractProcessor {
  constructor () {
    super({modelName: 'Task', requestDiscriminationData: {}})
  }
  async getAll () {
    let query = {}
    let tasks = this.models.Task.findAll(query)
    return Promise.resolve(tasks)
  }
  async get ({id}) {
    return this.models.Task.findById(id)
  }
  async destroy ({id}) {
    let query = {
      where: {
        id
      }
    }
    console.log(query)
    return this.models.Task.destroy(query)
  }
  async update ({name, id}) {
    let query = {
      name
    }
    let where = {
      where: {
        id
      }
    }
    return this.models.Task.update(query, where)
  }
  async create ({name}) {
    return this.models.Task.create({name})
  }
}

module.exports = TasksProcessor
