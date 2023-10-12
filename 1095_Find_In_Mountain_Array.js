/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {

    let len = mountainArr.length();

    if ( len < 3 ) {
        return -1;
    }

    let peak, peakVal;

    let l = 0 ; r = len - 1;
    while ( l < r ) {
        let mid = Math.floor( ( l + r ) / 2);
        let midVal = mountainArr.get(mid);
        let beforeMidVal = mountainArr.get(mid-1);
        let afterMidVal = mountainArr.get(mid+1);
        if ( ( beforeMidVal < midVal ) && ( midVal > afterMidVal ) ){
            peak = mid;
            break;
        }  else {
            if ( ( beforeMidVal < midVal ) && ( midVal < afterMidVal ) ) {
                l = mid;
                peak = mid;
            } else {
                r = mid;
                peak = mid;
            }
        }
    }

    l = 0; r = peak;
    while ( l <= r ) {
        let mid = Math.floor( ( l + r ) / 2);
        let midVal = mountainArr.get(mid);
        if ( midVal === target ){
            return mid;
        }
        if ( midVal < target ) {
            l = mid + 1;
        }
        if ( midVal > target )  {
            r = mid - 1;
        } 
    }

    l = peak; r = len - 1;
    while ( l <= r ) {
        let mid = Math.floor( ( l + r ) / 2);
        let midVal = mountainArr.get(mid);
        if ( midVal === target ){
            return mid;
        }
        if ( midVal < target ) {
            r = mid - 1;
        }
        if ( midVal > target ) {
            l = mid + 1;
        } 
    }

    return -1;

};
