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
console.log(`Tail test: ${_.tail([1,2]) == [2]}`);


// Map, Filter, Reduce
_.filter = (array, predicate) => {
  const storage = [];
  array.forEach((element) => {
    if (predicate(element)) storage.push(element);
  });
  return storage;
}


