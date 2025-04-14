export const returnAPIResponse = ({
    status, isSuccess, data, errors
}) => ({
    status,
    isSuccess,
    data,
    errors: errors?.map((error) => (error)) || null,
});

export const ok = (res, data) => res.status(200).json(returnAPIResponse({
    status: 200,
    isSuccess: true,
    data,
    errors: null,
}));

export const badRequest = (res, message = 'Missing required values') => res.status(400).json(returnAPIResponse({
    status: 400,
    isSuccess: false,
    data: null,
    errors: [message],
}));

export const unauthorized = (res, message = 'Unauthorized') => res.status(401).json(returnAPIResponse({
    status: 401,
    isSuccess: false,
    data: null,
    errors: [message],
}));

export const forbidden = (res, message = 'Forbidden') => res.status(403).json(returnAPIResponse({
    status: 403,
    isSuccess: false,
    data: null,
    errors: [message],
}));

export const notFound = (res, message = 'Not found') => res.status(404).json(returnAPIResponse({
    status: 404,
    isSuccess: false,
    data: null,
    errors: [message],
}));

export const internalServerError = (res, message = 'Internal Server Error') => res.status(500).json(returnAPIResponse({
    status: 500,
    isSuccess: false,
    data: null,
    errors: [message],
}));