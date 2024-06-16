const cachedExampleFunction = (function () {
  function cacheFunction(func) {
    const cache = new Map();

    return function () {
      const args = JSON.stringify(arguments);

      if (cache.has(args)) {
        console.log(`Cache hit for ${args}`);
        return cache.get(args);
      }

      const result = func.apply(this, arguments);
      cache.set(args, result);

      if (cache.size > 10) {
        const firstKey = cache.keys().next().value;
        console.log(`Removing first cache entry: ${firstKey}`);
        cache.delete(firstKey);
      }

      console.log("Current cache size:", cache.size);
      return result;
    };
  }

  function exampleFunction(a, b) {
    console.log(`Computing ${a} ${b}`);
    return a + b;
  }

  return cacheFunction(exampleFunction);
})();

console.log(cachedExampleFunction(1, 2));
console.log(cachedExampleFunction(1, 2));
console.log(cachedExampleFunction(2, 3));
console.log(cachedExampleFunction(2, 3));

for (let i = 0; i < 12; i++) {
  console.log(`Result for ${i}, ${i + 1}: ${cachedExampleFunction(i, i + 1)}`);
}
