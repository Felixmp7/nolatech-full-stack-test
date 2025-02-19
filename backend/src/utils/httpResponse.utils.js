export const badRequest = (res, message = 'Missing required values') => res.status(400).json({ message });
export const unauthorized = (res, message = 'Unauthorized') => res.status(401).json({ message });
export const forbidden = (res, message = 'Forbidden') => res.status(403).json({ message });
export const notFound = (res, message = 'Not found') => res.status(404).json({ message });