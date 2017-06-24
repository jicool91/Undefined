function center(word) {
  var len = word.length;
  var res = '';
  if(len % 2) {
    res = word.substr(len/2, 1);
  } else {
    res = word.substr(len/2 - 1, 2);
  }
  return res;
}