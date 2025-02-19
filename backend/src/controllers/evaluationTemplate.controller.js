import { matchedData } from 'express-validator';

import { ERRORS } from '../constants/errors.js';
import { EvaluationTemplate } from '../models/evaluationTemplate.model.js';
import { handleErrors } from '../utils/errorHandler.utils.js';

export const createEvaluation = async (req, res) => {
    const {
        title, description, questions
    } = matchedData(req);
    try {
        const newEvaluation = new EvaluationTemplate({
            title, description, questions
        });
        await newEvaluation.save();
        res.status(201).json({
            message: 'Evaluation Template created successfully ✅',
            newEvaluationTemplate: newEvaluation
        });
    } catch (error) {
        console.log({
            error,
            errors: error.errors,
            message: error.message,
            name: error.name,
            log: 'createEvaluation'
        });
        handleErrors(error, res);
    }
};

export const getEvaluationById = async (req, res) => {
    const { id } = matchedData(req, { locations: ['params'] });
    try {
        const evaluation = await EvaluationTemplate.findById(id);
        if (!evaluation) throw new Error(ERRORS.NOT_FOUND);
        res.status(200).json(evaluation);
    }
    catch (error) {
        console.log({
            error, errors: error.errors, message: error.message, name: error.name, log: 'createEvaluation'
        });
        handleErrors(error, res);
    }
};

export const updateEvaluationById = async (req, res) => {
    const { id } = matchedData(req, { locations: ['params'] });
    const {
        title, description, questions
    } = matchedData(req);
    try {
        const updatedEvaluation = await EvaluationTemplate.findByIdAndUpdate(
            id,
            {
                title, description, questions
            },
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
            log: 'updateEvaluationById'
        });
        handleErrors(error, res);
    }
};