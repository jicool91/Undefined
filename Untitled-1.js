var arr = [
            { id : 1 },
            { id : 123 },
            { id : 1 },
            { id : 1 },
            { id : 2 },
            { id : 123 },
            { id : 123 },
            { id : 123 }
        ];

arr.reduce(function(res, obj) {
    var search = res.filter(function(iObj) {
        return obj.id === iObj.id;
    });
    if(search.length > 0 ) {
        search[0].counter += 1;
        return res;
    } else {
        res.push( {
            id: obj.id,
            counter: 1
        });
    }
    return res;
}, []);


var arr = [1,2,3,4,5,6,7,8,9,10];

var a = arr.reduce(function(res, el) {    
    if(el % 2 == 0 ) {
        res[0][0] += el;
    } else {
       res[1][0] += el; 
    }
    return res;
}, [[0],[0]]).reverse();

JSON.stringify(a)