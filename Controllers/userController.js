const Users = require("../Model/usersModel");


exports.loginController = async (req,res) =>{
    console.log("Inside loginController");
    const {email,password} = req.body

    try{
        const Admin = await Users.findOne({email,password})
        if(Admin){
            res.status(200).json(Admin)
        }
        else{
            res.status(401).json("Invalid User")
        }
    }
    catch(err){
        console.log(err);
        
    }
    
}