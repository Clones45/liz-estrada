const fs = require('fs');
const path = require('path');

const projectDir = 'd:\\Antigravity Proj\\Liz Website\\liz-estrada';

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
    let original = content;

    // Convert F8FAFC to text-gray-900 or remove it
    content = content.replace(/color:\s*"(?:#F8FAFC|#fff|#ffffff|rgba\(255,255,255,[\d.]+\))"/g, 'color: "#111827"');
    
    // Replace dark backgrounds
    content = content.replace(/background:\s*"linear-gradient\(135deg,\s*#060D1A\s*0%,\s*#0A1628\s*60%,\s*#0F1E3A\s*100%\)"/g, 'background: "#FFFFFF"');
    content = content.replace(/background:\s*"#0A1628"/g, 'background: "#F8FAFC"');
    content = content.replace(/background:\s*"linear-gradient\(135deg,\s*#0F1E3A\s*0%,\s*#0A1628\s*100%\)"/g, 'background: "#F3F4F6"');
    content = content.replace(/background:\s*"rgba\(6,13,26,[\d.]+\)"/g, 'background: "#FFFFFF"');
    content = content.replace(/background:\s*"rgba\(255,255,255,0\.03\)"/g, 'background: "#FFFFFF"');
    
    // borders
    content = content.replace(/border:\s*"1px solid rgba\(255,255,255,0\.06\)"/g, 'border: "1px solid #E5E7EB"');
    content = content.replace(/borderRight:\s*"1px solid rgba\(255,255,255,0\.05\)"/g, 'borderRight: "1px solid #E5E7EB"');

    // specific to hero
    content = content.replace(/background:\s*"linear-gradient\(to top, rgba\(6,13,26,0\.8\) 0%, transparent 100%\)"/g, 'background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)"');
    content = content.replace(/background:\s*"linear-gradient\(180deg, #060D1A 0%, #040A14 100%\)"/g, 'background: "#000000"'); // Footer

    // color: #060D1A -> color: #FFFFFF for text inside colored boxes like stat badges
    content = content.replace(/color:\s*"#060D1A"/g, 'color: "#FFFFFF"');
    
    // For specific text classes
    content = content.replace(/text-white/g, 'text-gray-900');

    if (original !== content) {
        console.log("Updated: " + filePath);
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
