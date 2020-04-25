const ghpages = require('gh-pages');

const { GH_TOKEN } = process.env;

ghpages.publish(
  'build',
  {
    repo: `https://${GH_TOKEN}@github.com/guibperes/my-blog`,
  },
  (err) => {
    if (err) {
      throw err;
    }
  },
);
