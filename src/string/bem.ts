function toClass(classes, prefix = '') {
  if (typeof classes === 'string') {
    return (prefix + classes).trim();
  }

  const arrClasses = Array.isArray(classes)
    ? classes
    : Object.keys(classes).filter(className => classes[className]);

  return arrClasses.reduce(
    (prev, currClass) => `${prev ? `${prev} ` : ''}${prefix + currClass}`,
    '',
  );
}
/**
 * @memberof module:string
 * @desc
 * ##### 快速生成符合标准 bem 规范的 classnames
 *
 * 1、初始化 bem 生成器
 *
 * bem({ block:string, prefix?: string, elementPrefix?: string,  modifierPrefix?: string }): (element, modifier, utils) => string
 *
 * ```
 * // 生成器返回工具函数
 * const cx = bem({ block: 'prepaid' });
 *
 * const zentCx = bem({ block: 'loading', prefix: 'zent-' });
 *
 * const quirkCx = bem({ block: 'quirk', elementPrefix: '~~', modifierPrefix: '^^' });
 *
 * // 输入 element
 * cx('main') // 'prepaid__main'
 *
 * zentCx('root') // 'zent-loading__root'
 *
 * quirkCx('root') // 'quirk~~root'
 *
 * // 输入 element + modifer
 * cx('main', 'active') // 'prepaid__main prepaid__main--active'
 *
 * zentCx('root', 'active') // 'zent-loading__root zent-loading__root--active'
 *
 * quirkCx('root', 'active') // 'quirk~~root quirk~~root^^active'
 *
 * // 输入 element + modifer + utils
 * cx('main', 'active', 'force-hide') // 'prepaid__main prepaid__main--active force-hide'
 *
 * zentCx('root', 'active' 'fixed') // 'zent-loading__root zent-loading__root--active fixed'
 *
 * quirkCx('root', 'active', 'float-right') // 'quirk~~root quirk~~root^^active float-right'
 * ```
 *
 * 2、生成的 bem 工具函数支持三种参数格式
 *
 * element, modifier, utils 都支持一下传参方式, 以 modifier 举例
 *
 * ```
 * // 输入字符串(假值等同于空字符串)
 * cx(null, 'active') // 'prepaid prepaid--active'
 *
 * // 输入数组, 平级展开
 * cx('main', ['active', 'show']) // 'prepaid__main prepaid__main--active prepaid__main--show'
 *
 * // 输入对象, 取第一级 key 并校验 Boolean(object[key]) 决定是否显示
 * cx('main', { active: true, show: false, disabled: { relative: true } }, 'auto-width')
 * // 'prepaid__main prepaid__main--active prepaid__main--disabled auto-width'
 * ```
 */

function bem({ prefix = '', block, elementPrefix = '__', modifierPrefix = '--' }: {
  prefix?: string, 
  block:string, 
  elementPrefix?: string,  
  modifierPrefix?: string
 }): (element?: string, modifier?: string, utils?: string) => string {
  return function (element = '', modifier = '', utils = '') {
    const blockClass = `${prefix}${block}`;
    const elementClass = element
      ? toClass(element, blockClass + elementPrefix)
      : '';
    const blockModifier =
      modifier && !elementClass
        ? ` ${toClass(modifier, blockClass + modifierPrefix)}`
        : '';
    const elementModifier =
      modifier && elementClass
        ? ` ${toClass(modifier, elementClass + modifierPrefix)}`
        : '';
    const utilsClass = utils ? ` ${toClass(utils)}` : '';
    const bemClasses = element
      ? elementClass + elementModifier
      : blockClass + blockModifier;
    return (bemClasses + utilsClass).trim();
  };
}

export default bem;
