// W3C Event Dispatch
var event = document.createEvent( 'HTMLEvents' );
// event type, bubbling, cancelable
event.initEvent( 'click', true, true );
element.dispatchEvent( event );

// IE (Legacy) mechanism
var event = document.createEventObject();
element.fireEvent( 'onclick', event );