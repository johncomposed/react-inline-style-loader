"use strict";
var cssom = require("cssom");

module.exports = function(content) {
  if (this.cacheable) this.cacheable();
  
  function toCamelCase(string) {
    return string.replace(/^([A-Z])|[\s-](\w)/g, (match, p1, p2, offset) => {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  }
  
  function renameSelector(selector) {
    return selector
      .replace(/^\./, '_')
      .replace(/^\#/, '__');
  }

  function cssToObject(css) {
    var cssString = (typeof css === 'string') ? css : css.toString();

    var sheet = cssom.parse(cssString);
    var cssRules = Array.apply(null, sheet.cssRules);
    var results = {};
    
    cssRules.forEach(r => {
      var name = renameSelector(r.selectorText);
      var styles = Array.apply(null, r.style);
      results[name] = {};
      styles.forEach(s => {
        var rule = toCamelCase(s);
        results[name][rule] = r.style[s];
      });
    });
    
    return results;
  }

  return "module.exports = " + JSON.stringify(cssToObject(content));
};
