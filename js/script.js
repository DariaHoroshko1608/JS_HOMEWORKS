(function () {
  function deepFreeze(obj) {
    const propNames = Object.getOwnPropertyNames(obj);
    for (const name of propNames) {
      const value = obj[name];

      if (value && typeof value === "object") {
        deepFreeze(value);
      }
    }

    return Object.freeze(obj);
  }

  const user = {
    data: {
      a: 1,
      b: 2,
      c: 3,
      d: {
        a1: 1,
        b1: 2,
        c1: 3,
        d1: {
          a2: 3,
          b2: 3,
          c2: 3,
        },
      },
    },
  };

  deepFreeze(user);

  user.data.a = 100;
  console.log(user.data.a);
})();
