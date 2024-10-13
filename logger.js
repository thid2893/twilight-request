module.exports.logger = function (fn) {
  return function (...args) {
    console.time(`Execution time for ${fn.name}`);
    const result = fn.apply(this, args);
    console.timeEnd(`Execution time for ${fn.name}`);
    return result;
  };
};
