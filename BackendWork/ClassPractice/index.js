const avg  = require('./utils');
var average = avg(100, 100, 100);
function avgSqrt(average) {
  return Math.sqrt(average);
}
console.log(avgSqrt(average));
