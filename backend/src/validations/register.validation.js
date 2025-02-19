import { checkSchema } from 'express-validator';
import { validateCredentialsSchema } from './login.validation.js';

export const VALID_ROLES = ['admin', 'employee', 'manager'];

export const validateRegister = () => checkSchema({
    ...validateCredentialsSchema,
    role: {
        in: ['body'],
        isIn: {
            options: [VALID_ROLES],
            errorMessage: 'Role must be one of the following: admin, employee, manager'
        },
    },
    fullName: {
        in: ['body'],
        isString: {
            errorMessage: 'Full name must be a string'
        }
    },
    position: {
        in: ['body'],
        isString: {
            errorMessage: 'Position must be a string'
        }
    }
});