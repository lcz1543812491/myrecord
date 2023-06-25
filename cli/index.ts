const fs = require("fs");

fs.mkdirSync('./hei');
fs.writeFileSync('./hei/index.ts', 'index');
fs.writeFileSync('./hei/package.json', 'package');