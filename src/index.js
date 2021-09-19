const express = require('express');
const handlebars  = require('express-handlebars');
const path = require('path');
const route = require('./routers');
const app = express();
const db = require('./config/db/index');
const port = 3000;

//Connect db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('util'));

app.set('views', path.join(__dirname, 'resources/views'));
//Set engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

route(app);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})