const appointments = require("../Model/appointmentModel");


exports.addAppointmentsController = async (req,res) =>{
    console.log("Inside addAppointmentsController");
    const {name,number,email,date,department,message} = req.body

    try{
        const newAppointment = new appointments({name,number,email,date,department,message})
        await newAppointment.save()
        res.status(200).json(newAppointment)
        console.log(newAppointment);
        
    }
    catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
    
}
