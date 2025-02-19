import { checkSchema } from 'express-validator';

export const validateCredentialsSchema = {
    email: {
        in: ['body'],
        isEmail: {
            errorMessage: 'Invalid Email'
        }
    },
    password: {
        in: ['body'],
        isLength: {
            errorMessage: 'Password must be at least 6 characters long',
            options: { min: 6 }
        }
    },
};

export const validateCredentials = () => checkSchema(validateCredentialsSchema);