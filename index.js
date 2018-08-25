/*
  remember app entry point, from here on we need to init all our routes and load other stuff like the sync on the ORM, that can
  be also better but for doing so, now is your job
*/

const routes = require('./routes')
let env = require('dotenv').config()// to know exactly why it takes the .env or to take another one, read https://github.com/motdotla/dotenv
let envParse = require('dotenv-parse-variables')
let chalk = require('chalk')// prints with pretty colors in the console

if (!env.error) {
  env = envParse(env.parsed)
  // throw env.error
} else {
  console.log(chalk.yellow('No .env file found, reading from ENVIRONMENT'))
}
console.info(chalk.cyan.bold('\nLoaded environment variables\n'))
const ModelConfig = require('./model-config') // load first the env variables from the .env file

routes()
