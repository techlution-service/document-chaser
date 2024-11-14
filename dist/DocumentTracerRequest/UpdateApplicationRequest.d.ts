/**
 * @typedef {import('./DocumentTracerRequest.js').TEMPLATE_TYPE_ENUM} TEMPLATE_TYPE_ENUM
 */
/**
 * Class for Updating Application Request.
 * @extends DocumentTracerRequest
 */
export default class UpdateApplicationRequest extends DocumentTracerRequest {
    /**
     * @param {string} [input]
     * @returns {string}
     */
    static checkId(input?: string): string;
    /**
     * @param {UpdateApplicationRequestInput} input
     * @returns {UpdateApplicationRequestInput}
     */
    static parse(input: UpdateApplicationRequestInput): UpdateApplicationRequestInput;
    /**
     * @param {CreateApplicationRequestInput} input
     */
    constructor(input: CreateApplicationRequestInput);
}
export type TEMPLATE_TYPE_ENUM = any[];
import DocumentTracerRequest from './DocumentTracerRequest.js';
//# sourceMappingURL=UpdateApplicationRequest.d.ts.map