import { Employee } from '../models/employee.model.js';

export const getEmployees = async (_req, res) => {
    try {
        const employees = await Employee.find();
        res.status(201).json({ employees });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error when getting employees ❌' });
    }
};