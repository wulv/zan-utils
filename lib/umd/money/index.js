(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./formatLargeNumber", "./tozhCn"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const formatLargeNumber_1 = require("./formatLargeNumber");
    const tozhCn_1 = require("./tozhCn");
    exports.default = {
        formatLargeNumber: formatLargeNumber_1.default,
        tozhCn: tozhCn_1.default
    };
});
