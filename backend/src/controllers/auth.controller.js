import { matchedData } from 'express-validator';

import { createEmployeeService } from '../services/employee.service.js';
import { loginService } from '../services/login.service.js';
import { createUserService } from '../services/user.service.js';
import { handleErrors } from '../utils/errorHandler.utils.js';
import { ok, returnAPIResponse } from '../utils/httpResponse.utils.js';

export const register = async (req, res) => {
    const {
        email, password, role, fullName, position
    } = matchedData(req);

    const { data: user, error: userError } = await createUserService({
        email, password, role
    });

    if (userError) return handleErrors(userError, res);

    const { data: employee, error: employeeError } = await createEmployeeService({
        userId: user._id, fullName, position
    });

    if (employeeError) return handleErrors(userError || employeeError, res);

    return res.status(201).json(returnAPIResponse({
        status: 201,
        success: true,
        data: {
            user: {
                id: user._id, email, role
            },
            employee
        }
    }));
};

export const login = async (req, res) => {
    const { email, password } = matchedData(req);
    const { data: token, error } = await loginService({ email, password });

    if (error) return handleErrors(error, res);
    return ok(res, { token });
};
