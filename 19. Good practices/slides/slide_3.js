/* BAD!!! */
$( document ).ready( function () {
   $( 'a' ).on( 'click', function ( e ) {
      $.ajax({
         url      : this.href,
         success  : function ( response ) {
            $(  '#text').fadeOut( 300, function () {
               this.innerHTML = response;
               $( this ).fadeIn( 300 );
            });
         }
      });
   });
});