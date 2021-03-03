const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  return alias({
    src: "src",
    components: "src/components",
    pages: "src/pages",
    assets: "src/assets",
    styles: "src/styles",
    providers: "src/providers",
    utils: "src/utils",
  })(config);
};
