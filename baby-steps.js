const process = require("process");
const argv = process.argv;
// console.log(Number(items[2]));
let sum = 0;

for (i = 2; i < argv.length; i++) {
  sum += Number(argv[i]);
}
console.log(sum);
