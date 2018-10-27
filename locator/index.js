const fs = require('fs');
const path = require('path');

const clientLocatorPath = './static/';

// global variable
const content = require('./env')();
fs.writeFileSync(path.join(`${clientLocatorPath}/locator.js`), content);

// global function
// const scriptPath = './src/locator/script/';
// const fileList = fs.readdirSync(path.join(scriptPath));
// let scriptContent = '';

// for (const fileName of fileList) {
//   const filePath = path.join(`${scriptPath}/${fileName}`);
//   scriptContent += fs.readFileSync(filePath);
//   scriptContent += '\n';
// }

// fs.writeFileSync(path.join(`${clientLocatorPath}/script.js`), scriptContent);
