"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatLargeNumber = _interopRequireDefault(require("./formatLargeNumber"));

var _tozhCN = _interopRequireDefault(require("./tozhCN"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  formatLargeNumber: _formatLargeNumber.default,
  tozhCN: _tozhCN.default
};
exports.default = _default;