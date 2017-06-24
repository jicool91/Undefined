// Палиндром

var array = ['alala', 'ololo', 'Hello', 'World', 'alla'];

function palindrom(arr) {
  return arr.filter(function(word) {
    return word.split('').every(function(letter) {
      return word.indexOf(letter) != word.lastIndexOf(letter);
    }); 
  });
}



'word' === 'word'.split('').reverse().join('')