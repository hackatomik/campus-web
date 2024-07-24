// Marked
import { marked } from "marked";

const markdownFile = Bun.file("README.md");
const markdownText = await markdownFile.text();
// Promise type handler
const parsedHtml = marked.parse(markdownText);
let html = "";
if (typeof parsedHtml == "string") {
  html = parsedHtml;
}

// Create or clean file
const index = Bun.file("index.html");
await Bun.write(index, "");
// Writer
const writer = index.writer();
writer.write(`<!DOCTYPE html>
    <html Lang="es">
    <head>
        <meta charset="UTF-8">
        <title>H9 {CAMPUS} </title>
        <link rel="stylesheet" href="https://unpkg.com/mvp.css">
        <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/132721362">
    </head>
    <body>
    <main>
    \n`);
writer.write(html);
writer.write(`\n</main>\n</body>\n</html>`);
writer.end();
