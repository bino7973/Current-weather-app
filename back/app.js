const express = require('express');
const morgan = require('morgan');

const app = express();

const routerApi = require('./router')

app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());


app.use((req, res, next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorisation')
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.use('/temperature', routerApi);

module.exports = app;
