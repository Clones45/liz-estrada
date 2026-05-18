const fs = require('fs');
const path = require('path');

const projectDir = 'd:\\Antigravity Proj\\Liz Website\\liz-estrada';
const searchRegex = /style=\{\{\s*background:\s*"linear-gradient\(135deg,\s*#060D1A\s*0%,\s*#0A1628\s*60%,\s*#0F1E3A\s*100%\)"\s*\}\}/g;
const replaceString = 'className="bg-white"'; // We will replace the inline style with a background class

function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile() && filePath.endsWith('.tsx')) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && name !== 'node_modules' && name !== '.next') {
            walkSync(filePath, callback);
        }
    });
}

walkSync(projectDir, function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (searchRegex.test(content)) {
        console.log("Replacing in: " + filePath);
        content = content.replace(searchRegex, 'className="bg-white"');
        // Let's also replace text-white/text-gray-400 since we're going light mode
        content = content.replace(/text-white/g, 'text-gray-900');
        content = content.replace(/text-gray-400/g, 'text-gray-600');
        content = content.replace(/text-gray-300/g, 'text-gray-700');
        content = content.replace(/bg-navy-900/g, 'bg-gray-50');
        content = content.replace(/bg-navy-800/g, 'bg-white');
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
