import jwt from 'jsonwebtoken';
import { badRequest, unauthorized } from '../utils/httpResponse.utils.js';

export const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return unauthorized(res);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        badRequest(res, 'Authentication failed');
    }
};