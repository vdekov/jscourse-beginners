// Inject the `table` before the second `news-item` element
// of the `news-container` element
var table          = document.querySelector( 'table' );
var news_container = document.getElementById( 'news-container' );
var news_items     = document.querySelectorAll( '.news-item' );

news_container.insertBefore( table, news_items[ 1 ] );