import mongoose from 'mongoose';

const EvaluationSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    score: { type: Number, required: true },
    feedback: { type: String },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Evaluation = mongoose.model('Evaluation', EvaluationSchema);
