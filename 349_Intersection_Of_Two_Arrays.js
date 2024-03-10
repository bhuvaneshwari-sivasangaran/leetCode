/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let set = new Set(nums1);
    let arr = [];
    
    for (let num of set) {
        if (nums2.includes(num)) {
            arr.push(num);
        }
    }
    
    return arr;

};
