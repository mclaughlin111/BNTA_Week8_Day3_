const ScranAdvisor = require('./ScranAdvisor');
const restaurants = require('./restaurants.json')

const scranAdvisor = new ScranAdvisor(restaurants);

// console.log(scranAdvisor.print());
// console.log(scranAdvisor.count());
// console.log(scranAdvisor.findByName("The brunch Club"));
// console.log(scranAdvisor.returnAllName());
console.log(scranAdvisor.returnByLocation("Glasgow"));


