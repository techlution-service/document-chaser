/**
 * @typedef {Object} DocumentTracerConfigInput
 * @property {string} key
 * @property {string} secret
 * @property {?string} domain
 * @property {?string} env
 */
export default class DocumentTracerConfig {
    /**
     * @param {DocumentTracerConfigInput} input
     */
    static validate({ key, secret, env, domain, }: DocumentTracerConfigInput): {
        key: string;
        secret: string;
        env: string;
        domain: string;
    };
    /**
     * @param {DocumentTracerConfigInput} input
     */
    constructor(input: DocumentTracerConfigInput);
    key: string;
    secret: string;
    domain: string;
    env: string;
}
export type DocumentTracerConfigInput = {
    key: string;
    secret: string;
    domain: string | null;
    env: string | null;
};
//# sourceMappingURL=DocumentTracerConfig.d.ts.map