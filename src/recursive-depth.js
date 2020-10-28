const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1, depthList = []) {
    if (Array.isArray(arr)) {
      arr.forEach((el) => {
        if (Array.isArray(el)) {
          this.calculateDepth(el, depth + 1, depthList);
        }
      });

      depthList.push(depth);
      depth = 1;
    }

    return Math.max(...depthList);
  }
};