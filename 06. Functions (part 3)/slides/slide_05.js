function foo() {
   return;
}

foo instanceof Function;      // true
foo instanceof Object;        // true
foo.constructor;              // Function
foo.name;                     // "foo"
foo.length;                   // 0