/**
 * 校验中国手机号
 * @memberof module:validate
 * @param {number|string} value - 手机号
 * @return {boolean}
 * @example
 * const chinaMobile = require('zan-utils/validate/chinaMobile');
 * chinaMobile(13170273187); // true
 * chinaMobile('13170273187g'); // false
 */

function chinaMobile(value: number|string):boolean {
  return /^((\+86)|(86))?(13[0-9]|15[012356789]|17[3678]|18[0-9]|14[57])[0-9]{8}$/.test(String(value));
}
export default chinaMobile;
