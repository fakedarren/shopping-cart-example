var routes = require('./service/register-routes'),
    server = require('./service/create-server');


var app = server.create();

routes.register(app);
app.listen(1337);

console.log('Application running at http://localhost:1337');