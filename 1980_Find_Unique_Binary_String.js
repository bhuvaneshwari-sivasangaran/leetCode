/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

    const set = new Set(nums), length = nums.length, max = Math.pow(2, length);
    
    for(let number = 0; number < max; number++) {
        const binary = number.toString(2).padStart(length, '0');
        if(!set.has(binary)) {
            return binary;
        }
    }

    return -1;

};
