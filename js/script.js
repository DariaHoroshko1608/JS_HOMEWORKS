(function () {
  function createArrayIterator(arr) {
    let index = 0;

    return {
      next() {
        if (index < arr.length) {
          return { value: arr[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }

  Array.prototype[Symbol.iterator] = function () {
    return createArrayIterator(this);
  };

  const arr = [1, 2, 3, 4, 5];
  const iterator = arr[Symbol.iterator]();

  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
})();
