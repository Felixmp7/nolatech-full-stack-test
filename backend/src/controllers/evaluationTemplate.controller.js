import { matchedData } from 'express-validator';

import { ERRORS } from '../constants/errors.js';
import { EvaluationTemplate } from '../models/evaluationTemplate.model.js';
import { handleErrors } from '../utils/errorHandler.utils.js';
import { ok } from '../utils/httpResponse.utils.js';

export const createEvaluationTemplate = async (req, res) => {
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
            log: 'createEvaluationTemplate'
        });
        handleErrors(error, res);
    }
};

export const getEvaluationTemplateById = async (req, res) => {
    const { id } = matchedData(req, { locations: ['params'] });
    try {
        const evaluation = await EvaluationTemplate.findById(id);
        if (!evaluation) throw new Error(ERRORS.NOT_FOUND);
        res.status(200).json(evaluation);
    }
    catch (error) {
        console.log({
            error, errors: error.errors, message: error.message, name: error.name, log: 'getEvaluationTemplateById'
        });
        handleErrors(error, res);
    }
};

export const updateEvaluationTemplateById = async (req, res) => {
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
            log: 'updateEvaluationTemplateById'
        });
        handleErrors(error, res);
    }
};

export const getAllEvaluationTemplates = async (_req, res) => {
    try {
        const evaluationTemplates = await EvaluationTemplate.find();
        ok(res, evaluationTemplates);
    } catch (error) {
        console.log({
            error,
            errors: error.errors,
            message: error.message,
            name: error.name,
            log: 'getAllEvaluationTemplates'
        });
        handleErrors(error, res);
    }
};