/** @typedef import('./DocumentTracerConfig.js').DocumentTracerConfigInput DocumentTracerConfigInput */
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
     * @params {string} [id]
     * @return {DocumentTracer}
     */
    application(id: any): DocumentTracer;
    /** @return {DocumentTracer} */
    orFail(): DocumentTracer;
    /**
     * @param {Object} payload
     * @returns {boolean}
     */
    verify(payload: any): boolean;
    /**
     * @param {CreateApplicationRequest|CreateApplicationRequestInput} [input]
     * @returns {DocumentTracer}
     */
    create(input?: CreateApplicationRequest | CreateApplicationRequestInput): DocumentTracer;
    /**
     * @param {UpdateApplicationRequest|UpdateApplicationRequestInput} [input]
     * @returns {DocumentTracer}
     */
    update(input?: UpdateApplicationRequest | UpdateApplicationRequestInput): DocumentTracer;
    /**
     * @param {DeleteApplicationRequest|DeleteApplicationRequestInput} [input]
     * @returns {DocumentTracer}
     */
    delete(input?: DeleteApplicationRequest | DeleteApplicationRequestInput): DocumentTracer;
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
    then(resolve: any, reject: any): Promise<any>;
    #private;
}
/**
 * ('./DocumentTracerConfig.js').DocumentTracerConfigInput DocumentTracerConfigInput
 */
type _import = any;
export { _import as import };
import DocumentTracerConfig from './DocumentTracerConfig.js';
//# sourceMappingURL=DocumentTracer.d.ts.map
