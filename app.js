const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs());
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./route/admin');
const shopRoute = require('./route/shop'); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.route);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'});
})

app.listen(3000);