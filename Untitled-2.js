var keys = ['kesdy1','k234ey2','ksfey3','kesdy4'];
var data = [123,'blabla','Helo World!','207'];

keys.reduce(function(obj, key, index) {
    obj[key] = data[index] 
    return obj
}, {});

function num() {
    var i = 0;
    return function() {
        console.log(i++)
    }
}

const num = (i) => () => i++


var obj1 = {
    name: 'Вася'
}

var obj2 = {
    show: function(){
        console.log(this.name)
    }
}

var obj3 = {};

obj2.__proto__ = obj1;
obj3.__proto__ = obj2;
obj3.prototype


function Counter() {
    var i = 0;
    this.start = function() {
        this.timer = setInterval(function() {
            console.log(i++)
        }, 1000)
    };
    this.stop = function() {
        clearInterval(this.timer)
    }
}


var a = 10;

function test(){
    var a;
    if(true){
        a = 7
    } else {
        a = 18
    }
}

test()

console.log(a)



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

var a = arr.reduce(function(res, obj){
    var search = res.filter(function(iobj){
        return iobj.id == obj.id
    });
    if(search.length > 0){
        search[0].count += 1
        return res
    } else {
        res.push({
            id: obj.id,
            count: 1
        });
        return res
    }
},[]);

console.log(JSON.stringify(a,'',2))