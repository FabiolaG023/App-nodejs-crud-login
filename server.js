const  express = require('express');
const bodyParser = require('body-parser');
const msql = require('mysql2');
const methodOverride = require('method-override');
const {Sequelize, DataTypes} = require('sequelize');
const session = require('express-session');



const Route = require('./routes/Route');
const RegistractionRoute = require('./routes/Registraction');
const SessionsRoute = require('./routes/Sessions');

const findUserMiddleware = require('./middlewares/find_users');
const authUserMiddleware = require('./middlewares/auth_users');

const app = express();
const port = 3000;


const sessionConfig = {
  resave: false,
  saveUninitialized: false,
  secret: '151313484vjsgjgsjaga555852'
};
app.use(session(sessionConfig));
app.use(findUserMiddleware);
app.use(authUserMiddleware);

// el orden de las sentecias es importante
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));

// aqui se montan las rutas
app.use(Route);
app.use(RegistractionRoute);
app.use(SessionsRoute);
app.set('view engine', 'pug');

 
app.get('/tienda/info', function (req, res) {
  console.log(req.userId)
  res.render('home',{user: req.userId});
  

}); 
 

app.listen(port, () => console.log(`Servidor escuchando por el puerto: ${port}!`));
