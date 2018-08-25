// init all the models, configure them and export them to be used in the app
const Sequelize = require('sequelize')
// the url conection for PG is postgresql://PG_USER:PG_PASSWORD@PG_HOST:PG_PORT/PG_DB and the string concat is string interpolation
// more info for string interpolation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
const sequelize = new Sequelize(
  `postgresql://${process.env.PG_USER}:${process.env.PG_PASS}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DB}`
  )

const Task = sequelize.define('task', {
  name: Sequelize.STRING,
  status: Sequelize.INTEGER,
  createdAt: Sequelize.DATE,
  updatedAt: Sequelize.DATE
})

Task.sync({})

module.exports = {
  Task
}
