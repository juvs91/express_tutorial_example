/* we export all our task functionality, in this case only data processors that query the db,
note it can also do other stuff like operational-hooks that basically run on events on the db for example */
const processor = require('./processor')

module.exports = {
  processor
}
