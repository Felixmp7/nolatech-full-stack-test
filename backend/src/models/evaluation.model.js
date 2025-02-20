import { Schema, model } from 'mongoose';

const EvaluationSchema = new Schema({
    evaluationTemplateId: { type: Schema.Types.ObjectId, ref: 'EvaluationTemplate' },
    evaluatedId: { type: Schema.Types.ObjectId, ref: 'Employee' },
    evaluatorId: { type: Schema.Types.ObjectId, ref: 'Employee' },
    answers: [{
        questionId: { type: String, required: true },
        answer: {
            type: Number, required: true, min: 1, max: 5
        },
    }],
    feedback: { type: String, required: false },
}, { timestamps: true });

export const Evaluation = model('Evaluation', EvaluationSchema);
