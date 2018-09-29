(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./money", "./string", "./validate"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const money_1 = require("./money");
    const string_1 = require("./string");
    const validate_1 = require("./validate");
    exports.default = {
        money: money_1.default,
        string: string_1.default,
        validate: validate_1.default,
    };
});
