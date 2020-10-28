const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if (typeof(sampleActivity) !== 'string') {
		return false;
	} else if (Number.isNaN(parseFloat(sampleActivity))) {
		return false;
	} else if (+sampleActivity <= 0 || +sampleActivity > MODERN_ACTIVITY) {
		return false;
	}
	return Math.ceil(Math.abs( Math.log((parseFloat(sampleActivity)) / MODERN_ACTIVITY) / (-693 / 1000) ) * HALF_LIFE_PERIOD);
};
