var arr = ['Hello', 'World', 'Ololo', 'Privet'];

arr.filter(function(word) {
  return word.split('').every(function(letter) {
    return word.indexOf(letter) === word.lastIndexOf(letter);
  })
})