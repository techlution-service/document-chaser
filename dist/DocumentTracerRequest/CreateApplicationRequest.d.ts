/**
 * @typedef {import('./DocumentTracerRequest.js').TEMPLATE_TYPE_ENUM} TEMPLATE_TYPE_ENUM
 */
/**
 * Class for Creating Application Request.
 * @extends DocumentTracerRequest
 */
export default class CreateApplicationRequest extends DocumentTracerRequest {
    /**
     * @param {CreateApplicationRequestInput} input
     * @returns {CreateApplicationRequestInput}
     */
    static parse(input: CreateApplicationRequestInput): CreateApplicationRequestInput;
    /**
     * @param {CreateApplicationRequestInput} input
     */
    constructor(input: CreateApplicationRequestInput);
}
export type TEMPLATE_TYPE_ENUM = any[];
import DocumentTracerRequest from './DocumentTracerRequest.js';
//# sourceMappingURL=CreateApplicationRequest.d.ts.map