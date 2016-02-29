function typeOf( variable ) {
   switch ( true ) {
      case variable === null            : return 'null';
      case Number.isNaN( variable )     : return 'NaN';
      case variable instanceof Boolean  : return 'boolean';
      case variable instanceof String   : return 'string';
      case variable instanceof Number   : return 'number';
      case variable instanceof Array    : return 'array';
      case variable instanceof Function : return 'function';
   }
   return typeof variable;
}