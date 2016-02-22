var shopping_cart = [
   { product : 'T-shirt', price : 10 },
   { product : 'Jeans', price : 69.9 },
   { product : 'Jacket', price : 119.99 }
];

shopping_cart.forEach( function ( item ) {
   item.price = item.price.toFixed( 2 );
   var char = 65 - item.product.length - item.price.length;
   
   console.log( item.product + new Array( char ).join(' ') + item.price );
});