<?php
// declare a class
class Person {
   // declare constructor
   function Person ( $name, $age ) {
      $this->name = $name;
      $this->age  = $age;
   }
   
   // `$name` getter
   function getName() {
      return $this->name;
   }
}
?>