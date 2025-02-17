import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { Employee } from '../models/employee.model.js';
import { User } from '../models/user.model.js';

const createUser = async ({ email, password, role }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, role });
    await user.save();

    return user;
};

const createEmployee = async ({ userId, fullName, position }) => {
    const employee = new Employee({ userId, fullName, position });
    await employee.save();
    return employee;
}

export const register = async (req, res) => {
    try {
        const { email, password, role, fullName, position } = req.body;
        const user = await createUser({ email, password, role });
        const employee = await createEmployee({ userId: user._id, fullName, position });
        res.status(201).json({ message: 'Usuario registrado ✅', user, employee });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error en el registro ❌' });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: 'Credenciales inválidas ❌' });
        }
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error en el login' });
    }
};
