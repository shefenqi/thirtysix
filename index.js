'use strict';

exports.toString = function (value) {
  if (isNaN(value)) {
    return '0';
  }

  return value.toString(36);
};

exports.parseInt = function (str) {
  return parseInt(str, 36);
};