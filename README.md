# express example with sequelize

# to run
for run it go to the root of the project and just run<br />
  node . <br />
# config files
we have 4 env variables, so create an .env file (with dot at the start pls) and add this for variables and fill them
host with the host, port with the port, user with user, pass with password and db with the db <br />
PG_HOST=<br />
PG_PORT=<br />
PG_USER=<br />
PG_PASS=<br />
PG_DB=<br />

# install dependencies
in the root of the project pls run to add all dependencies <br />
  npm i

# notes
this is the stuff we saw in class, this is a sample of a way you can manage a project in node and express, can we do it better 
welp yes we can wrap and call in all our endpoints orchestrators that basically can come from a another module and it's job is to 
wrap all the processors call and chain them as they need, cause remember the JOB for processors are calls to DB also the JOB for 
orchestrator is pretty simillar to an api gateway, for more info check https://microservices.io/patterns/apigateway.html 
and should be as atomic as it can, something is not working you can contact me on FB or whats app, it's ok form me :)
https://www.facebook.com/juventino.guzman 
