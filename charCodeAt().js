const strCode = str => str.split('').map(el =>
String.fromCharCode(el.charCodeAt() + 1)).join('');


const xz = (str) => str.split('').map(el => {
    if( el.charCodeAt() === 1103 ) {
      return String.fromCharCode(1072);
    } else if(el.charCodeAt() === 1071) {
       return String.fromCharCode(1040);
    } else if(el.charCodeAt() === 1105) {
      return String.fromCharCode(1078);
    } else if(el.charCodeAt() === 1025) {
      return String.fromCharCode(1046);
    }
    return String.fromCharCode(el.charCodeAt() + 1);   
  });

