"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HASH = exports.HEADER = exports.RESULT = void 0;
var crypto_1 = require("crypto");
exports.RESULT = {
    SUCCESS: 'success',
    FAIL: 'fail',
};
var HEADER = function (key) { return ({
    Authorization: "Bearer ".concat(key),
    'Content-Type': 'application/json',
}); };
exports.HEADER = HEADER;
var HASH_ALGORITHM = 'md5';
var HASH_FIELDS = ['externalId', 'message', 'timestamp'];
var HASH = function (input, secret) {
    var checksum = input.checksum;
    var extracted = HASH_FIELDS.reduce(function (o, f) {
        var _a;
        return Object.assign(o, (_a = {}, _a[f] = input[f], _a));
    }, {});
    var hash = (0, crypto_1.createHash)(HASH_ALGORITHM);
    hash.update("".concat(JSON.stringify(extracted)).concat(secret));
    if (hash.digest('hex') !== checksum)
        throw new Error();
    return true;
};
exports.HASH = HASH;
