function XO(str) {
  str = str.toLowerCase();
  var x = 0;
  var o = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      x++;
    } else if (str[i] === 'o') {
      o++;
    }
  }
  return x === o;
}


XO('xo')
console.log(XO("xxOo"));
XO("xxxm")
XO("Oo")
XO("ooom")