import { badRequest, forbidden, notFound, unauthorized } from './httpResponse.utils.js';

export const ERRORS = {
    BAD_REQUEST: 'BadRequest',
    NOT_FOUND: 'NotFound',
    FORBIDDEN: 'Forbidden',
    UNAUTHORIZED: 'Unauthorized'
};

export const handleErrors =  (error, res) => {
    if (error.message === ERRORS.BAD_REQUEST) return badRequest(res);

    if (error.message === ERRORS.NOT_FOUND) return notFound(res);

    if (error.message === ERRORS.FORBIDDEN) return forbidden(res);

    if (error.message === ERRORS.UNAUTHORIZED) return unauthorized(res);

    return res.status(500).json({ message: 'Internal server error' });
};