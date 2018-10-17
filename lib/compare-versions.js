/*!
 * @workplus/compare-versions.js v1.0.1
 * (c) 2018 Hejx <531601727@qq.com>
 * Released under the MIT License.
 * https://github.com/WorkPlusFE/compare-versions
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.workplus = factory());
}(this, (function () { 'use strict';

/**
 * Transform version to string
 *
 * @param {array} version
 * @param {number} [len=10]
 */

var transformVersion = function transformVersion(version) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return version.map(function (val) {
    return '0'.repeat(len - val.length) + val;
  }).join('.');
};

/**
 * Compare Versions
 * 
 * Please make sure the version type is consistent.
 *
 * @param {string} a version
 * @param {string} b another version
 * @param {number} c string length, default 10
 * 
 * if a > b, return 1
 * if a === b, return 0
 * if a < b, return -1
 * if (versions type is inconsistent) return null
 */
var compareVersions = function compareVersions(a, b, c) {
  var aArray = a.split('.');
  var bArray = b.split('.');
  if (aArray.length !== bArray.length) {
    console.error('[CompareVersions]: ' + a + '/' + b + ', the Versions type is inconsistent.');
    return null;
  }
  var aStr = transformVersion(aArray, c);
  var bStr = transformVersion(bArray, c);

  if (aStr > bStr) return 1;
  if (aStr === bStr) return 0;
  return -1;
};

return compareVersions;

})));
//# sourceMappingURL=compare-versions.js.map
