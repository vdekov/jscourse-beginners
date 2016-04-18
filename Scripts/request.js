/** 
 * @namespace Request
 *
 * @requires `extend`
 * @requires `QueryString`
**/

var Request = {};

Request.XHR = function ( params ) {
   extend( this.params, params );
   // `url` is required
   if ( ! this.params.url ) {
      throw new Error('Please provide `url` parameter');
   }
   // create the XHR
   this.xhr = new XMLHttpRequest();
   this.xhr.timeout = this.params.timeout;
   // add event handler
   this.xhr.onload = function ( e ) {
      this.params.onSuccess(
         this.xhr.responseText,
         new Date().getTime() - this.start_time
      );
   }.bind( this );
}

Request.XHR.prototype = {
   
   constructor : Request.XHR,
   
   // default parameters
   params      : {
      async       : true,
      url         : '',
      method      : 'get',
      data        : '',
      headers     : {},
      timeout     : 0,
      onSuccess   : function ( response ) {}
   },
   
   // our XHR object
   xhr         : null,
   
   send        : function ( data ) {
      data = data || this.params.data;
      if ( data.constructor !== window.FormData ) {
         // stringify data object
         data = QueryString.stringify(
            extend(
               QueryString.parse( this.params.data ), 
               QueryString.parse( data || {} )
            )
         );
         // in case the method is GET, embed the params into the url
         if ( this.params.method.toLowerCase() == 'get' ) {
            this.params.url += ( this.params.url.indexOf('?') > 0 ? '&' : '?' ) + data;
         }
         // set proper content-type header
         this.params.headers['Content-type'] = 'application/x-www-form-urlencoded';
      }
      // open state
      this.xhr.open( this.params.method.toUpperCase(), this.params.url, this.params.async );
      // set headers
      for ( var header in this.params.headers ) {
         this.xhr.setRequestHeader( header, this.params.headers[ header ] );
      }
      // finally send the request
      this.start_time = new Date().getTime();
      this.xhr.send( data );
   }
   
};