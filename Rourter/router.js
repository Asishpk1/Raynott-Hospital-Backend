const express = require('express')
const { addAppointmentsController, getAllAppointmentsController } = require('../Controllers/appointmentsController')
const { loginController } = require('../Controllers/userController')

const Router = new express.Router()

Router.post('/add-appointment',addAppointmentsController)
Router.get('/appointments',getAllAppointmentsController)
Router.post('/login',loginController)

module.exports = Router