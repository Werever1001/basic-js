const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (date && date instanceof Date && Object.getOwnPropertyNames(date).length == 0) {
    var month = date.getMonth();
    if (month < 2 || month == 11) {
      return 'winter';
    }
    else if (month < 5) {
      return 'spring';
    }
    else if (month < 8) {
      return 'summer';
    }
    else {
      return 'autumn';
    }
  }
  else{
    throw new Error();
  }
  
};
