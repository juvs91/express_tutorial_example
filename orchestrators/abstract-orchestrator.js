const modules = require('../modules')
class AbstractOrchestrator {
  constructor ({data, method, module, klass, init}) {
    this.data = data || {}
    this.init = init || {}
    this.method = method
    this.module = module
    this.klass = klass
    this.modules = modules
  }
  call () {
    let service = this.modules[this.module.toLowerCase()]
    if (typeof service === 'undefined') {
      throw new Error('Service not available')
    }
    let Klass = service[this.klass.toLowerCase()]
    if (typeof Klass === 'undefined') {
      throw new Error('Class type not available')
    }
    let operations = new Klass(this.init)
    let method = operations[this.method]
    if (typeof method === 'undefined') {
      throw new Error('operation not available')
    }
    return operations[this.method](this.data)
  }
}

module.exports = AbstractOrchestrator
