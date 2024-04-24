/**
 * @param {number} n
 * @return {number}
 */

const MEM = [0, 1, 1];
var tribonacci = function(n) {
      
      if ( n == 0 ) {
        return 0;
      } 

      if ( MEM[n] == null ) {
        MEM[n] = tribonacci( n - 3 ) + tribonacci( n - 2 ) + tribonacci( n - 1) ; 
      } 

      return MEM[n];

};
