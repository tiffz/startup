var Startup = function (s) {
  var seed = s; 
  var name = startupify(seed);
  var accent = new Color(getColor(seed * 4));

  this.getName = function () {
    return name;
  }

  this.getAccent = function () {
    return accent;
  }

  this.styleLogo = function (cont, color) {
    var logo = getLogo(seed * 2);
    var logoFont = getLogoFont(seed * 13);

    $(cont).html(logo + " " + name);
    $(cont).css("font-family", logoFont);
    if (color) {
      $(cont).css("color", accent.rgba());
    }
  }
}

var Color = function (color, alpha) {
  var r, g, b;
  var a = 1;
  if (color instanceof Color) {
    r = color.r();
    g = color.g();
    b = color.b();
  } else if (isArray(color)) {
    r = color[0];
    g = color[1];
    b = color[2];
  } else if (typeof color == "string") {
    r = parseInt(color.slice(-6, -4), 16);
    g = parseInt(color.slice(-4, -2), 16);
    b = parseInt(color.slice(-2), 16);
  }
  r = zeroFloor(r);
  g = zeroFloor(g);
  b = zeroFloor(b);
  
  if (alpha != undefined) {
    a = alpha;
  }

  this.setAlpha = function (alpha) {
    return new Color([r, g, b], alpha);
  }

  this.darken = function (amount, alpha) {
    if (!alpha) alpha = a;
    return new Color([r - amount, g - amount, b - amount], alpha);
  }

  this.hex = function () {
    return "#" + s(r.toString(16), 2) + s(g.toString(16), 2) + s(b.toString(16), 2);
  }

  this.rgba = function () { 
    return 'rgba(' + r + ',' + g + ',' + b + ', ' + a + ')';
  }

  function s (str, places) {
    while (str.length() < places) {
      str = "0" + str;
    }
    return str;
  }

  this.r = function () {
    return r;
  }

  this.g = function () {
    return g;
  }

  this.b = function () {
    return b;
  }

  this.a = function () {
    return a;
  }

  function zeroFloor (num) {
    return Math.max(num, 0);
  }
}

function setAlpha(color, alpha) {
  color = new Color(color, alpha);
  return color.rgba();
}

function isArray (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}