import { Schema, model } from 'mongoose';

import { VALID_ROLES } from '../validations/register.validation.js';

const UserSchema = new Schema({
    email: {
        type: String, unique: true, required: true 
    },
    password: { type: String, required: true },
    role: {
        type: String, enum: VALID_ROLES, required: true 
    }
}, { timestamps: true });

export const User = model('User', UserSchema);
