# expressquiz
## Requirements
- Node v20.9.0 (https://nodejs.org/en/download)
- Mysql (https://dev.mysql.com/downloads/installer/)

## Steps
- clone the repo
- run "npm install" to install packages

## To start the server
### To run in development env
- node --watch index.js --serverPort=3000 --dbusername=root --dbpassword=mpxfactor --dbname=quiz --dev=true
### To run
- node index.js --serverPort=3000 --dbusername=root --dbpassword=root --dbname=quiz --dev=true --secure=true
#### Arguments
- serverPort => give port number where server should run.
- dbusername => give proper dbms username.
- dbpassword => give proper dbms password.
- dbname => give proper database name.
- if dev=true => it deletes all the data from the database and creates admin user and seeds the database with example values.
- if secure = true => to work in chrome (because that's how it works in chrome, we will not be able to set cookie if not set to true.)
- if secure = false => it works in thunder client.

## Admin
- username => "nanu"
- email => "wtf@gmail.com"
- password => "neenu"

## Swagger
- http://localhost:3000/rest-api/
- give proper port number    

# Client Example
- cd to clientexample and run live server (runs on ports 5500, 3000, if you use any you will get cors error) 

# ToDo
- [ ] Add errors properly.
- [ ] Add Swagger docs
    - [x] user route
    - [ ] question route
    - [ ] choice route
    - [ ] userAnswer route
- [ ] Endpoints
    - [ ] No fucking idea what to do for results.
- [ ] Refactor code
- [ ] Migrate project to typescript
- [ ] Create Single executable file.
