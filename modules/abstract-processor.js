const ModgelConfig = require('../model-config')
class AbstractProcessor {
  /* model name is the name of the child and request discrimination data is the data to be ignores, this stuff is for example you want to have
    dynamic data in each model, more attr with a DB like postgres, from front you will get all the bulk of data(the json) and in that scenario
    get that modolen name, the data that needs to be ignores and check in db for a form that contain all that extra data and parse it to the extra data
    object and ignore all you have in the  requestDiscriminationData, that is an example of the usage of modelName and requestDiscriminationData
  */
  constructor ({modelName, requestDiscriminationData}) {
    this.modelName = modelName
    this.requestDiscriminationData = requestDiscriminationData
    this.models = ModgelConfig
  }
}

module.exports = AbstractProcessor
