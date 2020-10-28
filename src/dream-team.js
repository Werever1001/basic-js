const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = '';
  if (Array.isArray(members)) {
    members.map(function(member) {
      if (typeof member === 'string') {
        member = member.replace(/\s/g, '');
        result += member[0].toUpperCase();
      }
    });

    return result.split('').sort().join('');
  }
  return false;
};
