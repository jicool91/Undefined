var string = 'Hello   g';

function letters(str) {
  var vowel = 'aeyuio';
  var cntVowel = 0;
  var cntConsonant = str.split('').filter(function(el) {
    if(vowel.indexOf(el) > -1) { 
      cntVowel += 1;     
      return
    } else if(vowel.indexOf(el) == -1 && el !== '') return el;
  }).length;
  return console.log('гласные -  ' + cntVowel + '    Согласные -  ' + cntConsonant);
}