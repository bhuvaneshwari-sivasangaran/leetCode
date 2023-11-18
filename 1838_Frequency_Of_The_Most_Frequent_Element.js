/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    
    let maxFrequence = 0, currentSum = 0, j = 0;

    nums.sort( (a,b) => a - b );

    for ( let i = 0 ; i < nums.length ; i++ ) {

        currentSum += nums[i]

        while ( k + currentSum < nums[i] * ( i - j + 1) ) {
            console.log( i , j , currentSum )
            currentSum -= nums[j];
            j++;
        }

        maxFrequence = Math.max( maxFrequence, ( i - j +1 ) );

    }

    return maxFrequence;

};
