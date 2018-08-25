# express_tutorial_example

# for run it go to the root of the project and just run 
  node . 
# we have 4 env variables, si create an .env file (with dot at the start pls) and add this for variables and fill them
host with the host, port with the port, user with user, pass with password and db with the db 
PG_HOST=
PG_PORT=
PG_USER=
PG_PASS=
PG_DB=

#in the root of the project pls run to add all dependencies
  npm i

# this is the stuff we saw in class, this is a sample of a way you can manage a project in node and express, can we doit better 
welp yes we can wrap and call in all our endpoints orchestrators that basically can come from a another module and it's job is to 
wrap all the processors call and chain them as they need, cause remember the JOB for processors are calls to DB 
and should be as atomic as it can
