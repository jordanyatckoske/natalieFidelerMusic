const withSass = require("@zeit/next-sass");
module.exports = withSass({
  webpack: cfg => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  env: {
    REACT_APP_BANDSINTOWN_APPLICATION_ID: "caace21779fdd6bc893ef420ff089599",
  },
});
