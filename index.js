'use strict';

module.exports = function () {
  var arr = Array.prototype.slice.call(arguments[0]);
  return Math.max.apply(null, arr);
};
