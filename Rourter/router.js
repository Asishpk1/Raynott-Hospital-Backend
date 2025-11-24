const express = require('express')
const { addAppointmentsController } = require('../Controllers/appointmentsController')

const Router = new express.Router()

Router.post('/add-appointment',addAppointmentsController)

module.exports = Router