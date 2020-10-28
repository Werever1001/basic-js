const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';

  if (typeof options['separator'] === "undefined") options['separator'] = '+';
  if (typeof options['addition'] === "undefined") options['addition'] = "";
  if (!options['repeatTimes']) {
    return str + options['addition'];
  } else {
    result = (str + (options['addition'] + options['additionSeparator']).repeat(options['additionRepeatTimes'] - 1)
      + options['addition'] + options['separator']).repeat(options['repeatTimes']);
  }

  return result.substring(0, result.length - options['separator'].length);
};
  