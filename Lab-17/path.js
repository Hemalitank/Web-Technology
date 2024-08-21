const path=require("path");

console.log(path.join("./hello","./world"));
console.log(path.resolve('./hello','./world'));
console.log(path.relative("/hello","/world"));
console.log(path.dirname("/hello","/world"));