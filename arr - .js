var arr = [1,2,3,4,5,6,7,8,9];

function yoyo(arr){
    arr = arr.slice();
    var out = [];
    for(;arr.length;) out.push(arr.splice(0,2))
    return out
}

function yoyo(arr,n){
    arr = arr.slice();
    var out = [];
    for(;arr.length;) out.push(arr.splice(0,n))
    return out
}


// var mas = [];
// arr.filter(function(el,i,array) {
//       if(i === 0) {
//     mas.push([el, array[i+1]]);   
//   } else {
//     mas.push([array[i+1], array[i+2]]);  
//   } 
// })

// JSON.stringify(mas)

// JSON.stringify(arr.reduce(function(res, el, i, array) {
//   if(i === 0) {
//     res.push([el, array[i+1]]);   
//   } else {
//     res.push([array[i+1], array[i+2]]);  
//   } 
//   return res;
// },[]))


