import { checkSchema } from 'express-validator';

const createEvaluationSchema = {
    evaluationTemplateId: {
        in: ['body'],
        isMongoId: true,
        errorMessage: 'Invalid Evaluation Template ID'
    },
    evaluatedId: {
        in: ['body'],
        isMongoId: true,
        errorMessage: 'Invalid Evaluated ID'
    },
    evaluatorId: {
        in: ['body'],
        isMongoId: true,
        errorMessage: 'Invalid Evaluator ID'
    },
    answers: {
        in: ['body'],
        isArray: true,
        errorMessage: 'Answers must be an array',
        custom: {
            options: (answers) => answers.every(answer => answer.questionId && answer.answer),
            errorMessage: 'Answers must have questionId and answer'
        }
    },
    feedback: {
        in: ['body'],
        optional: true,
        isString: true,
        errorMessage: 'Feedback must be a string'
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