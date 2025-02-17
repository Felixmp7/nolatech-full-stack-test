import { Evaluation } from '../models/evaluation.model.js';
import { ERRORS, handleErrors } from '../utils/errorHandler.utils.js';

export const createEvaluation = async (req, res) => {
    const { title, description, questions } = req.body;
    try {
        if (!title || !description || !questions.length) throw new Error(ERRORS.BAD_REQUEST);
        const newEvaluation = new Evaluation({ title, description, questions });
        await newEvaluation.save();
        res.status(201).json({ message: 'Evaluation created successfully ✅' });
    } catch (error) {
        //  console.log({ error, errors: error.errors, message: error.message, name: error.name, log: "createEvaluation" });
        // console.log(error)
        handleErrors(error, res);
    }
};

export const getEvaluationById = async (req, res) => {
    const { id } = req.params;
    try {
        const evaluation = await Evaluation.findById(id).populate('employee', 'name email');
        if (!evaluation) throw new Error(ERRORS.NOT_FOUND);
        res.status(200).json(evaluation);
    }
    catch (error) {
        handleErrors(error, res);
    }
}