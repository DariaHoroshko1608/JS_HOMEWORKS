const myApply = (func, context, argsArray) => {
  if (typeof func !== 'function') {
    throw new TypeError('Error, none function');
  }

  context = context || window;

  const methodName = `__myApply_method_${Math.floor(Math.random() * 1000000)}`;

  context[methodName] = func;

  const args = argsArray.map((arg, index) => `argsArray[${index}]`).join(',');

  const functionCallCode = `context.${methodName}(${args})`;

  const result = eval(functionCallCode);

  delete context[methodName];

  return result;
};

const greet = (message) => {
  console.log(`${message}, ${context.name}`);
};

const context = {
  name: 'Vova :) ',
};

myApply(greet, context, ['Hello']);
