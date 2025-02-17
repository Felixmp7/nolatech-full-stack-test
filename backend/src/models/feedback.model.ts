import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
    evaluation: { type: mongoose.Schema.Types.ObjectId, ref: 'Evaluation', required: true },
    comment: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export const Feedback = mongoose.model('Feedback', FeedbackSchema);
