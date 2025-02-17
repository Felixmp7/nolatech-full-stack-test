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

export const updateEvaluationById = async (req, res) => {
    const { id } = req.params;
    const { title, description, questions } = req.body;
    try {
        if (!title || !description || !questions?.length) throw new Error(ERRORS.BAD_REQUEST);

        const updatedEvaluation = await Evaluation.findByIdAndUpdate(
            id,
            { title, description, questions },
            { new: true }
        );
        if (!updatedEvaluation) throw new Error(ERRORS.NOT_FOUND);
        res.status(200).json(updatedEvaluation);
    } catch (error) {
        console.log({
            error,
            errors: error.errors,
            message: error.message,
            name: error.name,
            log: "updateEvaluationById"
        });
        handleErrors(error, res);
    }
}

export const getEvaluationByEmployeeId = async (req, res) => {
    const { id: employeeId } = req.params;
    try {
        if (!employeeId) throw new Error(ERRORS.BAD_REQUEST);
        const evaluations = await Evaluation.find({ employee: employeeId });
        res.status(200).json(evaluations ?? []);
    }
    catch (error) {
        console.log({
            error,
            errors: error.errors,
            message: error.message,
            name: error.name,
            log: "getEvaluationByEmployeeId"
        });
        handleErrors(error, res);
    }
}