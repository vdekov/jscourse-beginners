<?php
// global variables are accessible everywhere
$global_variable = 1;

for ( $i = 0; $i < 5; $i += 1 ) {
   // $global_variable is available here
   // $i is not accessible outside this `for` loop
   if ( $i == 3 ) {
      // $global_variable is available here
      // $i is available here
      // $c is not accessible outside this `if` statement
      $c = 1;
   }
}
?>