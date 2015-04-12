var Startup = function (s) {
  var seed = s; 
  var name = startupify(seed);
  var accent = new Color(getColor(seed * 4));
  accent = accent.deviate(seed * 97, 20);
  var complement = makeComplement(accent);

  this.getName = function () {
    return name;
  }

  this.getAccent = function () {
    return accent;
  }

  this.getComplement = function () {
    return complement;
  }

  this.styleLogo = function (cont, color) {
    var logoSeed = seed * 2;
    var logo = "";
    if (seedChance(logoSeed * 7, 0.90)) {
      logo = getLogo(logoSeed);
    }

    var cursive = true;
    if (seedChance(logoSeed * 5 + 18, 0.25)) {
      $(cont).css("text-transform",  "lowercase");
    } else if (seedChance(logoSeed  * 5 + 18, 0.35)) {
      $(cont).css("text-transform",  "capitalize");
    } else if (seedChance(logoSeed * 5 + 18, 0.45)) {
      $(cont).css("text-transform",  "capitalize");
      $(cont).css("font-variant",  "small-caps");
    } else if (seedChance(logoSeed * 5 + 18, 0.95)) {
      cursive = false;
    }
    var logoFont = getLogoFont(logoSeed * 13, cursive);
    var fontSize = Math.max(randomInt(logoSeed * 17, 18, 13), 
                      randomInt(logoSeed * 19, 20, 13));
    var letterSpacing = randomInt(logoSeed * 23, 15, -15);
    letterSpacing = letterSpacing / 10.0 + "px";
    fontSize = fontSize / 10.0 + "em";

    $(cont).css("font-weight", "heavy");
    $(cont).html(logo + " " + name);
    $(cont).css("letter-spacing", letterSpacing);
    $(cont).css("font-size", fontSize);
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

  this.deviate = function (seed, range) {
    var newR = r + range - randomInt(seed, range);
    var newG = g + range - randomInt(seed + 1, range);
    var newB = b + range - randomInt(seed + 2, range);
    return new Color([newR, newG, newB]);
  }

  this.hex = function () {
    return "#" + s(r.toString(16), 2) + s(g.toString(16), 2) + s(b.toString(16), 2);
  }

  this.rgba = function () { 
    return 'rgba(' + r + ',' + g + ',' + b + ', ' + a + ')';
  }

  this.desaturate = function () {
    var avg = Math.floor((r + g + b) / 3);
    return new Color([avg, avg, avg]);
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

function makeComplement (color) {
  var newColor = rgbToHsl(color.r(), color.g(), color.b());
  newColor[0] = Math.abs(newColor[0] - .5);
  newColor = hslToRgb(newColor[0], newColor[1], newColor[2]);
  return new Color([newColor[0], newColor[1], newColor[2]],1);
}

function hslToRgb(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(r, g, b){
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}