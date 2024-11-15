/**
 * @typedef import('./DocumentTracerConfig.js')
 * .DocumentTracerConfigInput DocumentTracerConfigInput
 */
/**
 * @typedef import('./DocumentTracerError/index.js')
 * .DocumentTracerConfigError DocumentTracerConfigError
 */
/**
 * @typedef import('./DocumentTracerRequest/CreateApplicationRequest.js')
 * .CreateApplicationRequestInput CreateApplicationRequestInput
 */
/**
 * @typedef import('./DocumentTracerRequest/UpdateApplicationRequest.js')
 * .UpdateApplicationRequestInput UpdateApplicationRequestInput
 */
/**
 * @typedef import('./DocumentTracerRequest/DeleteApplicationRequest.js')
 * .DeleteApplicationRequestInput DeleteApplicationRequestInput
 */
export default class DocumentTracer {
    /**
     * @param {DocumentTracerConfig|DocumentTracerConfigInput} config
     * @returns {DocumentTracerConfig}
     */
    static "__#3@#parseConfig"(input: any): DocumentTracerConfig;
    /**
     * @param {DocumentTracerConfig|DocumentTracerConfigInput} config
     */
    constructor(config: DocumentTracerConfig | DocumentTracerConfigInput);
    /**
     * @function application
     * @param {string} [id]
     * @return {DocumentTracer}
     */
    application(id?: string): DocumentTracer;
    /** @return {DocumentTracer} */
    orFail(): DocumentTracer;
    /**
     * @param {Object} payload
     * @returns {boolean}
     */
    verify(payload: any): boolean;
    /**
     * @param {?CreateApplicationRequest|CreateApplicationRequestInput} input
     * @returns {DocumentTracer}
     */
    create(input: (CreateApplicationRequest | CreateApplicationRequestInput) | null): DocumentTracer;
    /**
     * @param {?UpdateApplicationRequest|UpdateApplicationRequestInput} input]
     * @returns {DocumentTracer}
     */
    update(input: (UpdateApplicationRequest | UpdateApplicationRequestInput) | null): DocumentTracer;
    /**
     * @param {?DeleteApplicationRequest|DeleteApplicationRequestInput} input
     * @returns {DocumentTracer}
     */
    delete(input: (DeleteApplicationRequest | DeleteApplicationRequestInput) | null): DocumentTracer;
    /** @type {?string} */
    get applicationId(): string;
    /** @type {?DocumentTracerError[]|DocumentTracerError} */
    get error(): any;
    /** @type {?string} */
    get result(): string;
    /** @type {?string} */
    get response(): string;
    /** @type {?string} */
    get config(): string;
    /** @type {?string} */
    get request(): string;
    /**
     * @callback DocumentTracerResolve
     * @param {DocumentTracerResponse} response
     */
    /**
     * @callback DocumentTracerReject
     * @param {DocumentTracerError} error
     */
    /**
     * @function then
     * @param {DocumentTracerResolve} resolve
     * @param {DocumentTracerReject} reject
     * @returns {DocumentTracerResolve|DocumentTracerRejcet}
     */
    then(resolve: (response: DocumentTracerResponse) => any, reject: (error: DocumentTracerError) => any): ((response: DocumentTracerResponse) => any) | DocumentTracerRejcet;
    #private;
}
/**
 * ('./DocumentTracerConfig.js')
 * .DocumentTracerConfigInput DocumentTracerConfigInput
 */
type _import = any;
export { _import as import };
import DocumentTracerResponse from './DocumentTracerResponse.js';
import DocumentTracerConfig from './DocumentTracerConfig.js';
//# sourceMappingURL=DocumentTracer.d.ts.map