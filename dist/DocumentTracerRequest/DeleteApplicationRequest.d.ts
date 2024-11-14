/**
 * Class for Deleting Application Request.
 * @extends DocumentTracerRequest
 */
export default class DeleteApplicationRequest extends DocumentTracerRequest {
    /**
     * @param {string} [id]
     * @returns {string}
     */
    static checkId(input: any): string;
    /**
     * @returns {Object}
     */
    static parse(): any;
    /**
     * @param {DeleteApplicationRequestInput} [input]
     */
    constructor(input?: DeleteApplicationRequestInput);
}
import DocumentTracerRequest from './DocumentTracerRequest.js';
//# sourceMappingURL=DeleteApplicationRequest.d.ts.map