
function strLength(string) {
  return string.split(' ').filter(function(el) {
    return el;
  }).length;
}

'Some string'.split(' ').filter(function(el) {
    return el;
  }).length;

function strLength(string) {
  return string.split(' ').filter(Boolean).length;
}
