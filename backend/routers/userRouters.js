import express from 'express';
import { registerController, loginController } from '../controllers/userController.js';

const router = express.Router();

// Register Route -(POST request)
router.route("/register").post(registerController);

// Login Route -(POST request)
router.route("/login").post(loginController);


export default router;