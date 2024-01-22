/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    const n = nums.length;
    const actualSum = n * (n + 1) / 2;
    let arraySum = 0;
    let uniqueSum = 0;
    const s = new Set();

    for (const a of nums) {
        arraySum += a;
        s.add(a);
    }

    for (const a of s) {
        uniqueSum += a;
    }

    const missing = actualSum - uniqueSum;
    const duplicate = arraySum - uniqueSum;

    return [duplicate, missing];

};
