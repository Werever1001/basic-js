const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const result = backyard.flat().filter(word => word == '^^').length
  return result
};











