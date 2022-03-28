let person = {
  name: 'John',
  sayHello: function(){
    console.log(this.name)
  }
};
person.sayHello();
console.log('end');