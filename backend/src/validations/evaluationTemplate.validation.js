import { checkSchema } from 'express-validator';

const createEvaluationTemplateSchema = {
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
    ...createEvaluationTemplateSchema
};

export const validateCreateEvaluationTemplate = () => checkSchema(createEvaluationTemplateSchema);
export const validateGetEvaluationTemplateById = () => checkSchema(getEvaluationByIdSchema);
export const validateUpdateEvaluationTemplateById = () => checkSchema(updateEvaluationByIdSchema);