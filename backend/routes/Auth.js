import express from 'express';
import AuthController from '../controllers/AuthController.js';
import BaseModel from '../models/BaseModel.js';
const router = express.Router();

const Auth = new AuthController();
router.post('/signin', Auth.signup.bind(Auth));



const AuthRoutes = {
    router,
}

export default AuthRoutes;