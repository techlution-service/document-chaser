/**
 * @typedef {Object} DocumentTracerResponseValueOf
 * @property {?string} _id
 * @property {?string} applicationId
 * @property {?DocumentTracerError[]} error
 * @property {boolean} success
 * @property {?Object} data
 */
export default class DocumentTracerResponse {
    /**
     * @param {Object} input
     * @param {boolean} [isCreate=false]
     * @returns {DocumentTracerResponse}
     */
    static handleResponse(input: any, isCreate?: boolean): DocumentTracerResponse;
    /**
     * @param {Object} input
     * @param {boolean} [isCreate=false]
     */
    constructor(input: any, isCreate?: boolean);
    /**
     * @param {Error[]} errors
     */
    parseError(errors: Error[]): void;
    /** @type {?string}  */
    get applicationId(): string;
    /** @type {?string}  */
    get id(): string;
    /** @type {?string}  */
    get _id(): string;
    /** @type {boolean}  */
    get success(): boolean;
    /** @type {?DocumentTracerError[]}  */
    get error(): DocumentTracerError[];
    /** @type {?Object}  */
    get data(): any;
    /** @return {DocumentTracerResponseValueOf} */
    valueOf(): DocumentTracerResponseValueOf;
    #private;
}
export type DocumentTracerResponseValueOf = {
    _id: string | null;
    applicationId: string | null;
    error: DocumentTracerError[] | null;
    success: boolean;
    data: any | null;
};
//# sourceMappingURL=DocumentTracerResponse.d.ts.map