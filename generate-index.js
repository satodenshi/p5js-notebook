const fs = require("fs");
const path = require("path");

// sketches ディレクトリのパス
const sketchesDir = path.join(__dirname, "sketches");
const outputFile = path.join(__dirname, "index.html");

// sketches 配下のディレクトリ一覧を取得
const sketchFolders = fs.readdirSync(sketchesDir).filter((file) => {
  const fullPath = path.join(sketchesDir, file);
  return fs.statSync(fullPath).isDirectory();
});

// HTMLの構成を作成
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>p5.js notebook</title>
  <style>
    body { font-family: sans-serif; padding: 2rem; }
    ul { list-style-type: none; padding: 0; }
    li { margin: 0.5rem 0; }
    a { text-decoration: none; color: #007acc; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>p5.js notebook</h1>
  <ul>
    ${sketchFolders
      .map((name) => {
        return `<li><a href="sketches/${name}/">${name}</a></li>`;
      })
      .join("\n    ")}
  </ul>
</body>
</html>
`;

// index.html に書き出す
fs.writeFileSync(outputFile, html, "utf8");
console.log(
  `✅ index.html を生成しました (${sketchFolders.length}件のスケッチ)`
);
