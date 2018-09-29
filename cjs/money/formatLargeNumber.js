"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 给大数字添加逗号分隔符
 * @param {number} value  待格式化的值
 * @returns {string} 格式化后的值
 * @example
 * const formatLargeNumber = require('zan-utils/money/formatLargeNumber');
 * formatLargeNumber(1000000);
 * // => '1,000,000'
 */
function formatLargeNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
exports.default = formatLargeNumber;
