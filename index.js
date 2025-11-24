const express = require('express')
const cors = require('cors')
const Router = require('./Rourter/router')
require('dotenv').config()
require('./Database/dbConnection')

const HospitalServer = express()

HospitalServer.use(cors())

HospitalServer.use(express.json())

HospitalServer.use(Router)

const PORT = process.env.PORT || 3000

HospitalServer.listen(PORT,()=>{
    console.log(`HospitalServer running at Port ${PORT}`);
    
})

HospitalServer.get('/',(req,res)=>{
    res.status(200).send(`<h1>Hospital Server running and waiting for client request</h2>`)
})