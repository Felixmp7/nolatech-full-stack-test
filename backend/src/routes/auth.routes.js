import { Router } from 'express';

import { login, register } from '../controllers/auth.controller.js';
import { validateInputs } from '../middlewares/validate.middleware.js';
import { validateCredentials } from '../validations/login.validation.js';
import { validateRegister } from '../validations/register.validation.js';

const router = Router();

router.post('/register', validateRegister(), validateInputs, register);
router.post('/login', validateCredentials(), validateInputs, login);

export default router;