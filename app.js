const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router
const routes = require(path.join(__dirname, './routes/index')); //router

// views set
app.set('views', path.join(__dirname, './views'));
app.set("view engine", "ejs");

const port = 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
