const fs = require('fs');
const { resolve } = require('path');
const showdown = require('showdown');

const converter = new showdown.Converter();

const posts = fs.readdirSync(resolve(__dirname, 'posts'));

const result = posts.map((post) => {
  const dataBuffer = fs.readFileSync(
    resolve(__dirname, 'posts', post, 'data.json'),
  );

  const contentBuffer = fs.readFileSync(
    resolve(__dirname, 'posts', post, 'content.md'),
  );

  const data = JSON.parse(dataBuffer);
  const contentHTML = converter
    .makeHtml(contentBuffer.toString())
    .split('\n')
    .join('');

  return { ...data, content: contentHTML };
});

fs.writeFileSync(resolve(__dirname, 'data.json'), JSON.stringify(result));
