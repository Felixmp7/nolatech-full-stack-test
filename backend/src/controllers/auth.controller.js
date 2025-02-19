import bcrypt from 'bcryptjs';
import { matchedData } from 'express-validator';
import jwt from 'jsonwebtoken';

import { ERRORS } from '../constants/errors.js';
import { Employee } from '../models/employee.model.js';
import { User } from '../models/user.model.js';
import { handleErrors } from '../utils/errorHandler.utils.js';
import { ok } from '../utils/httpResponse.utils.js';

const createUser = async ({
    email, password, role 
}) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email, password: hashedPassword, role 
        });
        await user.save();
        return {
            error: null,
            data: user
        };
    } catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'createUser' 
        });
        return {
            error,
            data: null
        };
    }
};

const createEmployee = async ({
    userId, fullName, position 
}) => {
    try {
        const employee = new Employee({
            userId, fullName, position 
        });
        await employee.save();
        return {
            error: null,
            data: employee
        };
    } catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'createEmployee' 
        });
        return {
            error: ERRORS.INTERNAL_SERVER_ERROR,
            data: null
        };
    }
};

const loginUser = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return { error: ERRORS.INVALID_CREDENTIALS, data: null };
        }
        const token = jwt.sign(
            {
                id: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
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

export const register = async (req, res) => {
    const {
        email, password, role, fullName, position 
    } = matchedData(req);

    const { data: user, error: userError } = await createUser({
        email, password, role 
    });

    if (userError) return handleErrors(userError, res);

    const { data: employee, error: employeeError } = await createEmployee({
        userId: user._id, fullName, position
    });

    if (employeeError) return handleErrors(userError || employeeError, res);

    return res.status(201).json({
        message: 'User created successfully ✅',
        user: {
            id: user._id, email, role 
        },
        employee
    });
};

export const login = async (req, res) => {
    const { email, password } = matchedData(req);
    const { data: token, error } = await loginUser({ email, password });

    if (error) return handleErrors(error, res);
    return ok(res, { token });
};
