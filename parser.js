const fs = require('fs');
const { resolve } = require('path');
const showdown = require('showdown');

const converter = new showdown.Converter();

const posts = fs.readdirSync(resolve(__dirname, 'src', 'posts'));

const result = posts
  .map((post, index) => {
    const dataBuffer = fs.readFileSync(
      resolve(__dirname, 'src', 'posts', post, 'data.json'),
    );

    const contentBuffer = fs.readFileSync(
      resolve(__dirname, 'src', 'posts', post, 'content.md'),
    );

    const data = JSON.parse(dataBuffer);
    const contentHTML = converter
      .makeHtml(contentBuffer.toString())
      .split('\n')
      .join('');

    return { id: index + 1, ...data, content: contentHTML };
  })
  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

fs.writeFileSync(
  resolve(__dirname, 'src', 'data.json'),
  JSON.stringify(result),
);
