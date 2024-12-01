
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./route/admin');
const shopRoute = require('./route/shop'); 

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoute);
app.use(shopRoute);

app.listen(3000);