import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Manager', 'Employee'], required: true }
}, { timestamps: true });

export const User = model('User', UserSchema);
