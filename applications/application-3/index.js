console.log('#### Hello World from application-3');

const application1 = require('@mhal007/application-1');
const application2 = require('@mhal007/application-2');
const library1 = require('@mhal007/library-1');

console.log('imported: ' + application1 + " " + application2 + " " + library1)

module.exports = "application-3";
