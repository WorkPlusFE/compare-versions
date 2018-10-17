'use strict';

/**
 * Transform version to string
 *
 * @param {array} version
 * @param {number} [len=10]
 */
const transformVersion = (version, len = 10) => version.map(val => '0'.repeat(len - val.length) + val).join('.');

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
const compareVersions = (a, b, c) => {
  const aArray = a.split('.');
  const bArray = b.split('.');
  if (aArray.length !== bArray.length) {
    console.error(`[CompareVersions]: ${a}/${b}, the Versions type is inconsistent.`);
    return null;
  }
  const aStr = transformVersion(aArray, c);
  const bStr = transformVersion(bArray, c);

  if (aStr > bStr) return 1;
  if (aStr === bStr) return 0;
  return -1;
};

export default compareVersions;