var list_container = document.getElementById( 'list-container' );
var ol             = document.getElementsByTagName( 'ol' )[ 0 ];
var ul             = document.getElementsByTagName( 'ul' )[ 0 ];

// `list_container` wraps `ol` and `ul` lists
wrap( list_container, ul );
wrap( list_container, ol, 'top' );

