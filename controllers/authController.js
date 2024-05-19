import jwt from 'jsonwebtoken';
import securepassword from '../util/securePassword.js';
import User from '../models/User.js';


 
export const userSignup = async (req,res)=>{ 
    try {
       const {name,email,password} = req.body;
       const hashpassword = securepassword(password)
       const emailExist = await User.findOne({email:email})
       if (emailExist) {
         return res
         .status(400)
         .json({message:'User already registered with this mail'})
       }
       const user = new User({
        name: name,
        email: email,
        password: hashpassword
       });
       const userData = await user.save();
       console.log(req.body)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

 
export const userLogin = async (req,res)=>{
    try {
        console.log()
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}