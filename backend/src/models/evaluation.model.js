import { Schema, model } from 'mongoose';

const EvaluationSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    employee: { type: Schema.Types.ObjectId, ref: 'Employee', required: false },
    score: { type: Number, required: false },
    isAutoEvaluation: { type: Boolean, required: false },
    questions: [
        {
            question: { type: String, required: true },
            options: {
                type: [
                    {
                        label: { type: String },
                        score: { type: Number, required: true }
                    }
                ],
                required: true
            },
            answer: { type: String, default: null },
        }
    ],
    feedback: { type: String, default: null },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Evaluation = model('Evaluation', EvaluationSchema);
