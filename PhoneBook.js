// Телефонная книга. Не закончена

function PhoneBook() {
    this.book = [];
}

PhoneBook.prototype.generateID = function() {
    return Date.now()  + '-' + Math.round(Math.random() * 100000 );
}

PhoneBook.prototype.searchUser = function( name ) {
    return this.book.filter(function( obj ) {        
        return obj.name === name;
    });    
} 

PhoneBook.prototype.showAll = function() {
   this.book.forEach(function( obj ) {
        return console.log('id: ' + obj.id + '\nИмя: ' + obj.name + '\nТелефон: ' + obj.phone + '\n');
   });   
}

PhoneBook.prototype.addUser = function( name, phone ) {
    var user = this.searchUser( name )[0];
    if( user )  {
        console.log('Пользователь с таким именем уже существует!');
        return;
    }
    var obj = {id: this.generateID(), name: name, phone: phone};
    this.book.push( obj );
}

PhoneBook.prototype.showUser = function( name ) {    
    var user = this.searchUser( name )[0];
    if( !user ) return console.log('Пользователя с этим именем не существует!');
    return console.log('id: ' + user.id + '\nИмя: ' + user.name + '\nТелефон: ' + user.phone + '\n');
}

PhoneBook.prototype.deleteByName = function( name ) {
    var user = this.searchUser( name )[0];
    if( !user ) {
        console.log('Пользователя, которого вы хотите удалить, не существует!');
        return;
    }
    this.book = this.book.filter(function( obj ) {
        return obj.name !== name;
    });
   
    return console.log('Вы успешно удалили ' + name);
}
