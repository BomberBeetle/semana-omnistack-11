const routes = require('express').Router();
const ong_controller = require('./controllers/ong_controller')
const incident_controller = require('./controllers/incident_controller');
const session_controller = require("./controllers/session_controller");
const profile_controller = require("./controllers/profile_controller");
const {celebrate, Segments, Joi} = require('celebrate');

routes.post('/ongs',celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}) ,ong_controller.create);

routes.get('/ongs', ong_controller.index);

routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title : Joi.string().required(), 
        description: Joi.string().required(), 
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), incident_controller.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), incident_controller.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}) ,incident_controller.delete);

routes.post('/session', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}) ,session_controller.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), profile_controller.index);
module.exports = routes;