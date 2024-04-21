const customBind = (func, context) => {
  if (typeof func !== 'function') {
    throw new TypeError('Error, none function');
  }

  const bindArgs = Array.prototype.slice.call(arguments, 2);

  return function () {
    const args = Array.prototype.slice.call(arguments);

    const combinedArgs = bindArgs.concat(args);

    return func.apply(context, combinedArgs);
  };
};

const obj = {
  name: 'Vova :) ',
};

function greet(message) {
  console.log(`${message}, ${this.name}`);
}

const boundFunc = customBind(greet, obj, 'Hello');
boundFunc();
