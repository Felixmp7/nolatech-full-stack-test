import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Employee } from '../models/employee.model.js';
import { User } from '../models/user.model.js';
import { ERRORS, handleErrors } from '../utils/errorHandler.utils.js';

const createUser = async ({ email, password, role }) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hashedPassword, role });
        await user.save();
        return user;
    } catch (error) {
        throw new Error(error);
    }

};

const createEmployee = async ({ userId, fullName, position }) => {
    try {
        const employee = new Employee({ userId, fullName, position });
        await employee.save();
        return employee;
    } catch (error) {
        throw new Error(error);
    }
};

export const register = async (req, res) => {
    try {
        const { email, password, role, fullName, position } = req.body;
        if (!email || !password || !role || !fullName || !position) throw new Error(ERRORS.BAD_REQUEST);

        const user = await createUser({ email, password, role });
        const employee = await createEmployee({ userId: user._id, fullName, position });

        res.status(201).json({ message: 'Usuario registrado ✅', user: { id: user._id, email, role }, employee });
    } catch (error) {
    // console.log({ error, message: error.message, name: error.name, log: "register" });
        handleErrors(error, res);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) throw new Error(ERRORS.BAD_REQUEST);
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: 'Credenciales inválidas ❌' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
    // console.log({ error, message: error.message, name: error.name, log: "register" });
        handleErrors(error, res);
    }
};
