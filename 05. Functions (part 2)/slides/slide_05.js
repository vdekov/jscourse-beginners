// declare a function with name 'myFunction'
function myFunction() {
   return '';
}

// declare an anonymous function (saved in memory)
// removing the outer brackets will trigger 
// SyntaxError
(function () {
   return '';
});