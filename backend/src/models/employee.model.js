import { Schema, model } from 'mongoose';

const EmployeeSchema = new Schema({
    position: { type: String, required: true },
    fullName: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export const Employee = model('Employee', EmployeeSchema);
