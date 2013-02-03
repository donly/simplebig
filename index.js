var Buffer = require("buffer").Buffer,
    fs = require("fs");

var dict = require("./dict");
//var sc = fs.readFileSync(__dirname + "/sc.txt", "utf8"),
    //tc = fs.readFileSync(__dirname + "/tc.txt", "utf8");

var SimpleBig = {};

SimpleBig.s2t = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  for(i=0,len=str.length; i<len; i++) {
    idx = dict.sc.indexOf(str.charAt(i));
    ret += (idx === -1 ) ? str.charAt(i): dict.tc.charAt(idx);
  }
  return ret;
}

SimpleBig.t2s = function(str) {
  var ret = "", i, len, idx;
  str = str || this;
  for(i=0,len=str.length; i<len; i++) {
    idx = dict.tc.indexOf(str.charAt(i));
    ret += (idx === -1) ? str.charAt(i) : dict.sc.charAt(idx);
  }
  return ret;
}

SimpleBig.attach = function() {
  ["s2t", "t2s"].forEach(function(name, i) {
    if(!String.prototype[name]) {
      String.prototype[name] = SimpleBig[name];
    }
  });
}

module.exports = SimpleBig;
