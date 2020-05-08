/* eslint-disable no-console */
const ghpages = require('gh-pages');

const { GH_TOKEN } = process.env;

ghpages.publish(
  'build',
  {
    // repo: `https://${GH_TOKEN}@github.com/guibperes/blog`,
    user: {
      name: 'Guilherme Beidaki Peres',
      email: 'guibperes@gmail.com',
    },
  },
  (err) => {
    if (err) {
      console.log(err);
    }
  },
);
