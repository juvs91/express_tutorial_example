const AbstractOrchestrator = require('./abstract-orchestrator')
const Joi = require('joi')// joi is for validations, for more info check https://github.com/hapijs/joi

/*
  One example of the JOB of the orchestrator is validates the data that was sent from the client, all their params, also in the next format
  can be used to call another processor which is correct, let's remember orchestrators chains of calls all the things that need to be called
  also check all the data, like an api gateway
    // the object with id 1 will be passed to the selected methods on the initialiced class
    this.data = {
      id: 1
    }
    // the object with id 1 will be passed to the initialization of the class you selected
    this.init = {
      id: 1
    }
    // will call the method get from the selected class
    this.method = 'get'
    // will make all the calls from the selected class of this module
    this.module = 'tasks'
    // will initialize this selected class
    this.klass = klass
*/
class TaskOrchestrator extends AbstractOrchestrator {
  constructor ({data, method, module, klass, init}) {
    super({data, method, module, klass, init})
  }
  // example to validate filters in the data to be used on the get all, and know that those filters need to be an object
  async getAll () {
    let schema = Joi.object().keys({
      filters: Joi.object()
    }).options({ stripUnknown: true })
    let result = Joi.validate(this.data, schema)
    if (result.error !== null) {
      throw new Error(result.error)
    }
    return this.call()
  }
  async get () {
    let schema = Joi.object().keys({
      id: Joi.number().integer().required()
    }).options({ stripUnknown: true })
    let result = Joi.validate(this.data, schema)
    if (result.error !== null) {
      throw new Error(result.error)
    }
    return this.call()
  }
  async create () {
    let schema = Joi.object().keys({
      name: Joi.string().required(),
      status: Joi.number().integer().required()
    }).options({ stripUnknown: true })
    let result = Joi.validate(this.data, schema)
    if (result.error !== null) {
      throw new Error(result.error)
    }
    return this.call()
  }
  async update () {
    let schema = Joi.object().keys({
      id: Joi.number().integer().required(),
      name: Joi.string(),
      status: Joi.number().integer()
    }).options({ stripUnknown: true })
    let result = Joi.validate(this.data, schema)
    if (result.error !== null) {
      throw new Error(result.error)
    }
    return this.call()
  }
  async destroy () {
    let schema = Joi.object().keys({
      id: Joi.number().integer().required()
    }).options({ stripUnknown: true })
    let result = Joi.validate(this.data, schema)
    if (result.error !== null) {
      throw new Error(result.error)
    }
    return this.call()
  }
}

module.exports = TaskOrchestrator
