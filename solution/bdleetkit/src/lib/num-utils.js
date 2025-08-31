/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
    let xIndex = -1;
    let yIndex = -1;
    const numToIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        numToIndexMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        const y = target - x;
        if (numToIndexMap[y] !== undefined && numToIndexMap[y] !== i) {
            yIndex = numToIndexMap[y];
            xIndex = i;
            break;
        }
    }

    return [xIndex, yIndex];
};

// module.exports = { twoSum };
