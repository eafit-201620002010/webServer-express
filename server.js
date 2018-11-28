const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;
require('./hbs/helpers/helpres');

//Middleware
app.use(express.static(__dirname + '/public'));

//Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'mateo'
    });

});

app.get('/about', (req, res) => {

    res.render('about');

});


app.get('/data', (req, res) => res.send("Hola data"));

app.listen(port, () => console.log(`Escuchando puerto ${port}`));