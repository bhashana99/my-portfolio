import express from 'express';
import { registerUser, signIn,signOut ,changePassword} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/sign-in', signIn);
router.get('/sign-out',signOut);
router.post('/change-password/:id',changePassword);

export default router;

