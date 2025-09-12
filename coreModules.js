const myFile = require('fs').writeFileSync;

console.log("Node Js Core Modules"); // global core modules

// myFile.writeFileSync("coreModules.txt", "Node JS Core Modules"); //non-global core modules
myFile("coreModules.txt", "Node JS Core Modules");