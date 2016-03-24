var element   = document.querySelector( 'ol' );
var news_item = document.querySelector( '.news-item' )
                        .getElementsByClassName( 'news-content' )[ 0 ];

// Insert `ol` element in the end of the first `news-item`
news_item.appendChild( element );