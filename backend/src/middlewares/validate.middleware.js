import { validationResult } from 'express-validator';
import { badRequest } from '../utils/httpResponse.utils.js';

const formattedErrors = validationResult.withDefaults({
    formatter: (error) => ({
        value: error.value,
        msg: error.msg,
        path: error.path,
    }),
});

export const validateInputs = (req, res, next) => {
    const errors = formattedErrors(req);
    if (!errors.isEmpty()) return badRequest(res, errors.array());
    next();
};