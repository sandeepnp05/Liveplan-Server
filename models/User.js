import mongoose from "mongoose";

const userSechema =  new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{ 
        type: String,
        required:true,
    },
    mobile:{
        type: String,
    },
    password:{ 
        type: String,
        required: true,
    },
    isEmailVerified:{
        type: Boolean,
        default:false,
    },
    profileImage:{
        type: String,
    },
},{timestamps:true});
export default mongoose.model("User",userSechema);   