var list = [
   { label : 'Item 1' },
   {
      label : 'Item 2',
      list  : {
         '1' : { label : 'Sub Item 2.1' },
         '2' : { label : 'Sub Item 2.2' },
         '3' : { label : 'Sub Item 2.3' }
      }
   },
   {
      label : 'Item 3',
      list  : [
         {
            label : 'Sub Item 3.1',
            list  : {
               '1' : { label : 'Sub Item 3.1.1' },
               '2' : { label : 'Sub Item 3.1.2' }
            }
         },
         { label : 'Sub Item 3.2' },
         { label : 'Sub Item 3.3' }
      ]
   }
];

function printList( list ) {
   var html = '';
   var tag = list instanceof Array ? 'ol' : 'ul';
   
   html += '<' + tag + '>';
   for ( var key in list ) {
      html += '<li>' + list[ key ].label;
      if ( list[ key ].list ) {
         html += printList( list[ key ].list );
      }
      html += '</li>';
   }
   html += '</' + tag + '>';

   return html;
}

document.write( printList( list ) );