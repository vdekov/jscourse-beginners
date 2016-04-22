/* Good! */
$( document ).ready( onReady );

function onReady () {
   $( 'a ').on( 'click', onLinkClick );
}

function onLinkClick ( e ) {
   $.ajax({
      url     : this.href,
      success : onSuccess
   });
}

function onSuccess ( response ) {
   $( '#text' ).fadeOut( 300, onFadeOut );
}

function onFadeOut () {
   this.innerHTML = response;
   $( this ).fadeIn( 300 );
}