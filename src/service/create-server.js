const body_parser = require('body-parser'),
      compression = require('compression'),
      express = require('express'),
      exphbs  = require('express-handlebars'),
      handlebars_helpers = require('../helpers/handlebars-helpers'),
      session = require('express-session');


const app = express(),
      hbs = exphbs.create({
          layoutsDir: __dirname + '/../views/layouts',
          partialsDir: __dirname + '/../views/partials',
          defaultLayout: 'main',
          helpers: handlebars_helpers
      });


app.engine('handlebars', hbs.engine);

app.set('views', __dirname + '/../views');
app.set('view engine', 'handlebars');

app.use(body_parser.urlencoded({ extended: true }));
app.use(compression());
app.use(express.static(__dirname + '/../public'));
app.use(session({
    secret: 'shopping cart example secret',
    resave: true,
    saveUninitialized: true
}));


module.exports = {

    create(){
        return app;
    }

};