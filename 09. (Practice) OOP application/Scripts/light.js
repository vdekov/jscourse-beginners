function Light ( color ) {
   this.color = color;
   this.state = false;
}

Light.prototype = {
   turnOn : function () {
      this.state = true;
      console.log( this.color, 'is turned ON' );
   },
   
   turnOff : function () {
      this.state = false;
      console.log( this.color, 'is turned OFF' );
   }
};

