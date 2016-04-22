/* BAD!!! */
$( 'a' ).on( 'click', function ( e ) {
   // $(this) $(this) $(this) $(this) ... $(this)  
   $( this ).css( 'color', 'red' );
   $( this ).css( 'background', 'yellow' );
   console.log( $( this ).text() );
   $( this ).parent().addClass( 'active' );
});

/* Good! */
$( 'a' ).on( 'click', function ( e ) {
   var $this = $( this );
   $this.css({
      'color'        : 'red',
      'background'   : 'yellow'
   });
   console.log( $this.text() );
   this.parentNode.classList.add( 'active' );
});