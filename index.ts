// Showdown JS
const showdown = require("showdown");
const converter = new showdown.Converter();

// Files
const markdownFile = Bun.file("README.md");
const markdownText = await markdownFile.text();
const htmlContent = converter.makeHtml(markdownText);
const index = Bun.file("index.html");
const writer = index.writer();
writer.write(`<!DOCTYPE html>
    <html Lang="es">
    <head>
        <meta charset="UTF-8">
        <title>H9 {CAMPUS} </title>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css">
    </head>
    <body>
    <main>
    \n`);
writer.write(htmlContent);
writer.write(`\n</main>\n</body>\n</html>`);
writer.end();
