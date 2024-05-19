import express from 'express'
import { userLogin, userSignup } from '../controllers/authController.js';


const authRouter = express.Router();

authRouter.post('/signup',userSignup)
authRouter.post('/login',userLogin)

export default authRouter;