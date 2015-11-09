'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getPrefix;

function getPrefix(prop) {
  if (typeof document === 'undefined') return prop;

  var styles = document.createElement('p').style;
  var vendors = ['ms', 'O', 'Moz', 'Webkit'];

  if (styles[prop] === '') return prop;

  prop = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = vendors.length; i--;) {
    if (styles[vendors[i] + prop] === '') {
      return vendors[i] + prop;
    }
  }
}

module.exports = exports['default'];