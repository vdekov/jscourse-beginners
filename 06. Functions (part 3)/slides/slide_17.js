// declare a "class"
function Person ( name, age ) {
   // the function itself is our constructor
   this.name = name;
   this.age  = age;
   
   // we declare all methods inside the constructor
   this.getName = function () {
      return this.name;
   }
}