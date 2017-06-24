// Рандомные буквы в разном регистре
var str = "qwerty";
str.split('').reduce(function(string, letter) {
    return string += !Math.round(Math.random()) 
        ? letter.toLowerCase()
        : letter.toUpperCase();
}, '');