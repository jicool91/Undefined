
function strLength(string) {
  return string.split(' ').filter(function(el) {
    return el;
  }).length;
}

'я хуй знает куда еще короче, все отлично работает'.split(' ').filter(function(el) {
    return el;
  }).length;

function strLength(string) {
  return string.split(' ').filter(Boolean).length;
}