import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { ERRORS } from '../constants/errors.js';
import { User } from '../models/user.model.js';

export const loginService = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return {
                error: {
                    message: ERRORS.INVALID_CREDENTIALS
                },
                data: null
            };
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET,{ expiresIn: '1h' });
        return {
            error: null,
            data: token
        };
    } catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'loginUser'
        });
        return {
            error,
            data: null
        };
    }
};