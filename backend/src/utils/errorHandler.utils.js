import { ERRORS, MONGO_ERRORS } from '../constants/errors.js';
import {
    badRequest,
    forbidden,
    internalServerError,
    notFound,
    returnAPIResponse,
    unauthorized
} from './httpResponse.utils.js';

// eslint-disable-next-line complexity
export const handleErrors =  (error, res) => {
    if (error.message === ERRORS.NOT_FOUND) return notFound(res);
    if (error.message === ERRORS.FORBIDDEN) return forbidden(res);

    if (error.message === ERRORS.UNAUTHORIZED) return unauthorized(res);

    if (error.message === ERRORS.INVALID_CREDENTIALS) return badRequest(res, 'Invalid Credentials!');

    if (error.code === MONGO_ERRORS.DUPLICATE_KEY) return res.status(409).json(returnAPIResponse({
        data: null,
        status: 409,
        isSuccess: false,
        errors: [`Duplicated resource ${JSON.stringify(error.keyValue)}`],
    }));

    return internalServerError(res, [error.message]);
};