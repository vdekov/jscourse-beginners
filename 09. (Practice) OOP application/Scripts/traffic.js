function Traffic ( type ) {
   var type    = type;           // The type of the Traffic
   this.colors = [];             // Keeps the available colors of the Traffic
   this.lights = {};             // Stores the instances of the Light
   
   this.getType = function () {
      return type;
   }
   
   this.init();
}

Traffic.prototype = {
   init : function () {
      this.colors = this.getType() == 'people' ?
            [ 'red', 'green' ] :
            [ 'red', 'green', 'yellow' ];
      
      this.colors.forEach( function ( color ) {
         this.lights[ color ] = new Light( color );
      }, this );           // function () {}.bind( this )
   },
   
   stop : function () {
      this.colors.forEach( function ( color ) {
         color != 'red' && this.lights[ color ].turnOff();
      }, this );
      this.lights.red.turnOn();
   },
   
   pass : function () {
      this.colors.forEach( function ( color ) {
         color != 'green' && this.lights[ color ].turnOff();
      }, this );
      this.lights.green.turnOn();
   }
};

