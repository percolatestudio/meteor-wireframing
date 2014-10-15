/* A simple template for rendering placeholders for design implementation
 * Usage:
 *   {{> placeholder 'foobar'}} or {{> placeholder name='foobar'}}
 *
 * To give the placeholder a min-height of UNIT * height, do:
 *   {{> placeholder name='foobar' height=3}}
 */

var UNIT = 20;

function getName(context) {
  return context.name || context;
}

function getHeight(context) {
  return context.height || 1;
}

Template.placeholder.helpers({
  name: function() {
    return getName(this);
  },
  style: function() {
    var bgColor = stringToColour(getName(this));
    var color = isDark(bgColor) ? 'white' : 'black';

    return 'background-color: ' + bgColor + ';'
      + 'color: ' + color + ';'
      + 'min-height: ' + getHeight(this) * UNIT + 'px;'
      + 'min-width:' + UNIT + 'px;'
      + 'text-align: center';
  }
})

// from: http://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
var stringToColour = function(str) {

    // str to hash
    for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

    // int/hash to hex
    for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

    return colour;
}

var isDark = function(rgb) {
  var r = parseInt(rgb.slice(1, 3));
  var g = parseInt(rgb.slice(3, 5));
  var b = parseInt(rgb.slice(3, 7));

  var hsp = Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  );

  if (hsp > 127.5) {
    return true;
  }

  return false;
}
