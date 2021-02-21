const _ = {}

// Array methods
_.length = (array) => {
  return array.length;
}
// Test
console.log(`Length test: ${_.length([3,4,2]) === 3}`);

_.head = (array) => {
  if (!(_.length(array) === 0)) return array[0];
  console.error("cannot resolve head of empyt array");
}
// Test
console.log(`Head test: ${_.head([4,5,3]) === 4}`);

_.tail = (array) => {
  return array.slice(1);
}
// Test
console.log(`Tail test: ${_.tail([1,2])[0] === 2}`);

_.concat = (first, ...others) => {
  if (!others[0]) return first;
  return _.concat(first.concat(_.head(others)), _.tail(others));
}
// problem with base case
// console.log(_.concat([1], [2]));


// Tuple
_.createTuple = (a, b, c, ...d) => {

}

// Create Array
_.createArray = (...args) => {
  return Array.prototype.slice.call(args);
}
// Test
console.log(`Create Array test: ${Array.isArray(_.createArray(1, 2, 4))}`);

// Map, Filter, Reduce
_.filter = (array, predicate) => {
  const storage = [];
  array.forEach((element) => {
    if (predicate(element)) storage.push(element);
  });
  return storage;
}

_.reduce = (consumer, startValue, array) => {
  if (_.length(array) === 0) return startValue;
  const newStartValue = consumer(startValue, _.head(array));
  return reduce(consumer, newStartValue, _.tail(array));
}

// Pipe
_.pipe = (...funcs) => {
  if (length(funcs) === 0) return input => input;
  if (length(funcs) === 1) return input => head(funcs)(input);
  return (input) => {
    pipe(...tail(funcs))(head(funcs)(input));
  }
}
