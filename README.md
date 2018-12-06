# Birdie Database App
[![Build Status](https://travis-ci.com/jace-ys/birdie-database-app.svg?branch=master)](https://travis-ci.com/jace-ys/birdie-database-app)

Application URL: https://birdie-database-app.herokuapp.com/

#### Stack:
- React/Redux Frontend Client
- Node.js Backend API
- MySQL Database

## To run application:
#### Create a .env file in the project's root directory with the following format:
```
MYSQL_HOST=
MYSQL_PORT=
MYSQL_USER=
MYSQL_PASSWORD=
MYSQL_DB=
MYSQL_TABLE_NAME=
```

#### Run using Docker:
```
docker build -t birdie-database-app .
docker run -p 5000:5000 --name birdie-database-app birdie-database-app
```

#### Run using NPM:
```
npm install --prefix ./birdie-client
npm run build --prefix ./birdie-client
npm install --prefix ./birdie-api
npm start --prefix ./birdie-api
```

View application at http://localhost:5000.

## Testing:

#### Frontend Client:
Uses Jest
```
npm test --prefix ./birdie-client
```

#### Backend API:
Uses Mocha, Chai and Supertest
```
npm test --prefix ./birdie-api
```
