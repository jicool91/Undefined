var arr = [['id',10],['name','John'],['age', 20],['city','Moscow'],['admin', true]]

var result = arr.reduce(function(obj,array) {
  var object = {};
  object[array[0]] = array[1];
  obj.push(object);
  return obj;
}, []);

JSON.stringify(result)




//сделай так [{id: 10},{ name: 'John'},{age: 20},{city: 'Moscow'},{admin: true}]