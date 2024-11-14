export function isNull(input: any): boolean;
export namespace TEMPLATE_TYPE {
    let SUBMISSION: string;
    let INFORMATION_REQUEST: string;
}
export const TEMPLATE_TYPE_ENUM: string[];
export function Required(field: any): never;
export function parseInteger(field: any, input: any): number;
export function parseRequiredInteger(field: any, input: any): number;
export function extractDefined(fields: any, obj: any): any;
/**
 * @typedef {Object} DocumentTracerRequestValueOf
 * @property {string} method
 * @property {Object} data
 */
/** Base Class for Document Tracer Requests. */
export default class DocumentTracerRequest {
    /**
     * @returns {undefined}
     */
    static checkId(): undefined;
    /**
     * @param {string} method
     * @param {Object} data
     */
    constructor(method: string, data: any);
    /** @type {Object} */
    get data(): any;
    /** @type {string} */
    get body(): string;
    /** @type {string} */
    get method(): string;
    /**
     * @returns {Object}
     */
    valueOf(): any;
    #private;
}
export type DocumentTracerRequestValueOf = {
    method: string;
    data: any;
};
//# sourceMappingURL=DocumentTracerRequest.d.ts.map