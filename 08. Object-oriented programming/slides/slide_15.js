// `cat` is a single object, instance of `Object`
// In this situation:
// - `Object`           - constructor
// - `Object.prototype` - "class"
// same as `var cat = new Object({...})`
var cat = {
   // `type`      - property
   type  : 'animal',   
   // `speak`     - method    
   speak : function () {
      console.log( 'Meowww' );
   }
};