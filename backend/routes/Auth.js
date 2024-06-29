import express from 'express';
import AuthController from '../controllers/AuthController.js';
const router = express.Router();

const Auth = new AuthController();
router.post('/signup', Auth.signup.bind(Auth));
router.post('/signin', Auth.signin.bind(Auth));


const AuthRoutes = {
    router,
}

export default AuthRoutes;