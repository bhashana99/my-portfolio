import express from 'express';
import { registerUser, signIn } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/sign-in', signIn);

export default router;

