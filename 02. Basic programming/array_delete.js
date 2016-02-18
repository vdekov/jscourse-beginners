var a = [ "One", "Two", "Three", "Four", "Five" ];
var b = "Four";

if ( a.indexOf(b) >= 0) {
   var index = a.indexOf(b);
   a.splice( index, 1 );
   console.log(a);
}