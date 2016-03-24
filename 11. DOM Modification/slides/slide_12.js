var news_item      = document.querySelector( '.news-item.news-item-unadded' );
var news_container = document.getElementById( 'news-container' );

// Inject `news_item` into the end of the `news_container`
inject( news_item, news_container, 'bottom' );