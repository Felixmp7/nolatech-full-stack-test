import { ERRORS, MONGO_ERRORS } from '../constants/errors.js';
import {
    forbidden, notFound, unauthorized 
} from './httpResponse.utils.js';

export const handleErrors =  (error, res) => {

    if (error.message === ERRORS.NOT_FOUND) return notFound(res);

    if (error.message === ERRORS.FORBIDDEN) return forbidden(res);

    if (error.message === ERRORS.UNAUTHORIZED) return unauthorized(res);

    if (error.code === MONGO_ERRORS.DUPLICATE_KEY) return res.status(409).json({ message: `Duplicated resource ${JSON.stringify(error.keyValue)}` });

    return res.status(500).json({ message: 'Internal server error' });
};