

function repeatString(cnt, word) {
  return word.repeat(cnt);
}

function repeatStr(cnt, word) {
  var res = '';
  for(var i = 0; i < cnt; i++) {
    res += word;
  }
  return res;
}


function RepeatStr(cnt,word) {
  var res = Array.apply(null, Array(10)).reduce(function(result) {
    return result += word;
  }, '')
  return res;
}