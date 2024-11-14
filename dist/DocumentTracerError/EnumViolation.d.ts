/**
 * @extends RequestMalformed
 */
export default class EnumViolation extends RequestMalformed {
    /**
     * @param {string} field
     * @param {string[]} expected
     * @param {string} input
     */
    constructor(field: string, expected: string[], input: string);
}
import RequestMalformed from './RequestMalformed.js';
//# sourceMappingURL=EnumViolation.d.ts.map