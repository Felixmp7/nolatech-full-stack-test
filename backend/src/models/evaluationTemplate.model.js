import { Schema, model } from 'mongoose';

const EvaluationTemplateSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    date: { type: Date, default: Date.now },
    questions: [
        {
            question: { type: String, required: true },
            options: {
                type: [
                    {
                        label: { type: String },
                        score: { type: Number, required: true, min: 1, max: 5}
                    }
                ],
                required: true
            },
        }
    ],
}, { timestamps: true });

export const EvaluationTemplate = model('EvaluationTemplate', EvaluationTemplateSchema);
