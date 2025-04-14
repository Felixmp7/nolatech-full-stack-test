import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

export const createUserService = async ({
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