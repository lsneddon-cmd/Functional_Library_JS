"use strict";

var _ = {}; // Array methods

_.length = function (array) {
  return array.length;
}; // Test


console.log("Length test: ".concat(_.length([3, 4, 2]) === 3));

_.head = function (array) {
  if (!(_.length(array) === 0)) return array[0];
  console.error("cannot resolve head of empyt array");
}; // Test


console.log("Head test: ".concat(_.head([4, 5, 3]) === 4));

_.tail = function (array) {
  return array.slice(1);
}; // Test


console.log("Tail test: ".concat(_.tail([1, 2])[0] === 2));

_.concat = function (first) {
  for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    others[_key - 1] = arguments[_key];
  }

  if (!others[0]) return first;
  return _.concat(first.concat(_.head(others)), _.tail(others));
}; // problem with base case
// console.log(_.concat([1], [2]));
// Tuple


_.createTuple = function (a, b, c) {}; // Map, Filter, Reduce


_.filter = function (array, predicate) {
  var storage = [];
  array.forEach(function (element) {
    if (predicate(element)) storage.push(element);
  });
  return storage;
};