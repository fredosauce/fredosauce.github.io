const ghPages = process.env.DEPLOY_TARGET === 'gh-pages';

module.exports = {
  // prefixes asset paths to match what github pages expects
  assetPrefix: ghPages ? '/fredosauce.github.io/' : '',

  //maps browser url to react-router url (this sort of ended up being a faux-Next.js project)
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
};
