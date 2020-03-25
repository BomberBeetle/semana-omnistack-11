const routes = require('express').Router();
const ong_controller = require('./controllers/ong_controller')
const incident_controller = require('./controllers/incident_controller');
const session_controller = require("./controllers/session_controller");
const profile_controller = require("./controllers/profile_controller");

routes.post('/ongs', ong_controller.create);

routes.get('/ongs', ong_controller.index);

routes.post('/incidents', incident_controller.create);

routes.get('/incidents', incident_controller.index);

routes.delete('/incidents', incident_controller.delete);

routes.post('/session', session_controller.create);

routes.get('/profile', profile_controller.index);
module.exports = routes;