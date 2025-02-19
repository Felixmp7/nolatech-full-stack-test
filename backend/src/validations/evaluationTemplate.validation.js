import { checkSchema } from 'express-validator';

const createEvaluationSchema = {
    title: {
        in: ['body'],
        isString: true,
        notEmpty: true,
        errorMessage: 'Title is required'
    },
    description: {
        in: ['body'],
        isString: true,
        notEmpty: false,
        errorMessage: 'Description must be a string'
    },
    questions: {
        in: ['body'],
        isArray: true,
        notEmpty: true,
        errorMessage: 'Questions are required'
    }
};

const getEvaluationByIdSchema = {
    id: {
        in: ['params'],
        isMongoId: true,
        errorMessage: 'Invalid Evaluation ID'
    }
};

const updateEvaluationByIdSchema = {
    id: {
        in: ['params'],
        isMongoId: true,
        errorMessage: 'Invalid Evaluation ID'
    },
    ...createEvaluationSchema
};

export const validateCreateEvaluation = () => checkSchema(createEvaluationSchema);
export const validateGetEvaluationById = () => checkSchema(getEvaluationByIdSchema);
export const validateUpdateEvaluationById = () => checkSchema(updateEvaluationByIdSchema);