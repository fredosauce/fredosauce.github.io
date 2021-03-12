const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  assetPrefix: ghPages ? '/fredosauce.github.io/' : '', // rewrites asset paths to match what github pages expects
};
