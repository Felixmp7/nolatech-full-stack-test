import { Employee } from '../models/employee.model.js';

export const createEmployeeService = async ({
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
            error,
            data: null
        };
    }
};