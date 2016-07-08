var test = require("tap").test;
var style = require("./tmp/bundle");

test("ris-loader", function (t) {
  t.ok(style._lol);
  t.end();
});
