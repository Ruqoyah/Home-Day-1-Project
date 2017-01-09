'use strict'

module.exports = {

  dataTypes: function(result){
    if (result === null || typeof(result) == 'undefined') {
        return 'no value';
    }
    else {
      var x = typeof(result);

      switch (x){
        case 'boolean':
          if (result == true){
            return true;
          }
          else {
            return false;
          }
          break;
        case 'string':
          if (result.length <= 0) {
            return 0;
          }   
          else {            
            return result.length;
          }       
          break;          
        case 'number':
          if (result < 100) {
            return 'less than 100';
          }
          else if (result > 100) {
            return 'more than 100';
          }
          else if (result == 100) {
            return 'equal to 100';
          }
          break;
        case 'object':
          var y = result[2];
          if (typeof(y) == 'undefined'){
            return 'undefined';
          }
          return y; 
          break;
        case 'function':
          var z = Module[result](true);
          return z;
      }
    }
  }
}