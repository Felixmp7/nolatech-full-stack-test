import { matchedData } from 'express-validator';
import { Evaluation } from '../models/evaluation.model.js';
import { handleErrors } from '../utils/errorHandler.utils.js';
import { notFound, ok } from '../utils/httpResponse.utils.js';

export const createEvaluation = async (req, res) => {
    try {
        const {
            evaluationTemplateId, evaluatedId, evaluatorId, answers, feedback
        } = matchedData(req);

        const evaluation = new Evaluation({
            evaluationTemplateId, evaluatedId, evaluatorId, answers, feedback
        });
        await evaluation.save();

        return res.status(201).json({
            message: 'Evaluation created successfully',
            data: evaluation
        });
    } catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'createEvaluation'
        });
        handleErrors(error, res);
    }
};

export const getEvaluationById = async (req, res) => {
    try {
        const { id } = matchedData(req, { locations: ['params'] });
        const evaluation = await Evaluation.findById(id)
            .populate('evaluationTemplateId')
            .populate('evaluatedId')
            .populate('evaluatorId');
        if (!evaluation) {
            return notFound(res, 'Evaluation not found');
        }
        return ok(res, evaluation);
    }
    catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'getEvaluationById'
        });
        handleErrors(error, res);
    }
};

export const updateEvaluationById = async (req, res) => {
    try {
        const {
            id, evaluationTemplateId, evaluatedId, evaluatorId, answers, feedback
        } = matchedData(req, { locations: ['params', 'body'] });
        const evaluation = await Evaluation.findByIdAndUpdate(id, {
            evaluationTemplateId,
            evaluatedId,
            evaluatorId,
            answers,
            feedback
        }, { new: true });

        if (!evaluation) return notFound(res, 'Evaluation not found');

        return ok(res, evaluation);
    }
    catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'updateEvaluationById'
        });
        handleErrors(error, res);
    }
};

export const deleteEvaluationById = async (req, res) => {
    try {
        const { id } = matchedData(req, { locations: ['params'] });
        const evaluation = await Evaluation.findByIdAndDelete(id);
        if (!evaluation) return notFound(res, 'Evaluation not found');
        return ok(res, evaluation);
    }
    catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'deleteEvaluationById'
        });
        handleErrors(error, res);
    }
};

export const getEvaluationsByEmployeeId = async (req, res) => {
    try {
        const { id } = matchedData(req, { locations: ['params'] });
        const evaluations = await Evaluation.find({ evaluatedId: id })
            .populate('evaluationTemplateId')
            .populate('evaluatedId')
            .populate('evaluatorId');
        return ok(res, evaluations);
    }
    catch (error) {
        console.log({
            error, message: error.message, name: error.name, log: 'getEvaluationsByEmployeeId'
        });
        handleErrors(error, res);
    }
};
