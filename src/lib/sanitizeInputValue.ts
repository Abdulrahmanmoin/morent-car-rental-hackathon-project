export const sanitizeInput = (value: string) => {
    return value.replace(/[<>]/g, ''); // Removes < and > to prevent HTML tags
};