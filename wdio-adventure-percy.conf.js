var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");

exports.config = merge(wdioConf.config, {
  baseUrl: "https://57hours.com/",
  exclude: ["./test/specs/magazine.spec.js", "./test/specs/forms.spec.js"]
});
