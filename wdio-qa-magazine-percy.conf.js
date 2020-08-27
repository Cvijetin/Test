var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");

exports.config = merge(wdioConf.config, {
  baseUrl: "https://qa.57hours.com/",
  exclude: ["./test/specs/adventure.spec.js", "./test/specs/forms.spec.js"]
});
