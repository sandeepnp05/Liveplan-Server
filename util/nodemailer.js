const nodemailer = require('nodemailer');

const mailSender = async (name,email,userId)=>{
  try {
    const transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS:true,
        auth:{
            user: process.env.EMAIL_USER,
            password:process.env.EMAIL_PASS,
        },
        authMethod:'PLAIN'
    })
  } catch (error) {
    
  }
}