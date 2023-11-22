/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    
    const res = []

    const queue = [[0, 0]]

    while (queue.length) {
        const [i, j] = queue.shift()
        
        res.push(nums[i][j])

        const nextRow = i + 1
        if (!j && nextRow < nums.length) {
            queue.push([nextRow, j])
        }

        const nextCol = j + 1
        if (nextCol < nums[i].length) {
            queue.push([i, nextCol])
        }
    }

    return res

};
