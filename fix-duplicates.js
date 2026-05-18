const fs = require('fs');

const files = [
  'app/about/page.tsx',
  'app/consultation/page.tsx',
  'app/mortgage/page.tsx',
  'app/business-funding/page.tsx',
  'app/credit-repair/page.tsx'
];

files.forEach(file => {
  const filePath = `d:/Antigravity Proj/Liz Website/liz-estrada/${file}`;
  let content = fs.readFileSync(filePath, 'utf8');
  // It looks like:
  // className="..."
  // className="bg-white"
  // Let's merge them
  content = content.replace(/className="([^"]+)"\s*className="bg-white"/g, 'className="$1 bg-white"');
  fs.writeFileSync(filePath, content, 'utf8');
});
console.log("Fixed duplicate classNames");
