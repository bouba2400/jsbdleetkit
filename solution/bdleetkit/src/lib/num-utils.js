/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
	let xIndex = -1;
	let yIndex = -1;
	const numberToIndexMap = {};

	for (const [i, number_] of nums.entries()) {
		numberToIndexMap[number_] = i;
	}

	for (const [i, x] of nums.entries()) {
		const y = target - x;
		if (numberToIndexMap[y] !== undefined && numberToIndexMap[y] !== i) {
			yIndex = numberToIndexMap[y];
			xIndex = i;
			break;
		}
	}

	return [xIndex, yIndex];
};

// Module.exports = { twoSum };
