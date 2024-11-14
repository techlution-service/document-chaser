/**
 * @extends Error
 */
export default class DocumentTracerError extends Error {
    /**
     * @param {string} code
     * @param {string} message
     * @param {Object|string} detail
     */
    constructor(code: string, message: string, detail: any | string);
    code: string;
    detail: any;
}
//# sourceMappingURL=DocumentTracerError.d.ts.map