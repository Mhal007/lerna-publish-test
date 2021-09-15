console.log('application-3');

const application1 = require('@mhal007/application-1');
const application2 = require('@mhal007/application-2');

console.log('imported: ' + application1 + " " + application2)

module.exports = "application-3";
