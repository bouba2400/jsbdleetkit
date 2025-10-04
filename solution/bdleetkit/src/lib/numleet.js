/* eslint-disable unicorn/no-for-loop */
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

/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function (nums) {
	const n = nums.length;

	let targetSum = 0;
	for (let i = 1; i <= n; i++) {
		targetSum += i;
	}

	let currentSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
	}

	return targetSum - currentSum;
};

export const climbStairsRecursively = function (n) {
	if (n < 3) {
		return n;
	}

	return climbStairsRecursively(n - 1) + climbStairsRecursively(n - 2);
};

export const climbStairsEfficiently = function (n) {
	if (n < 3) {
		return n;
	}

	const cache = [1, 2];
	for (let i = 2; i < n; i++) {
		cache[i] = cache[i - 1] + cache[i - 2];
	}

	return cache[n - 1];
};

export const climbStairsMoreEfficiently = function (n) {
	if (n < 3) {
		return n;
	}

	let currentCount;
	let secondPreviousCount = 1;
	let previousCount = 2;

	for (let i = 2; i < n; i++) {
		currentCount = secondPreviousCount + previousCount;
		secondPreviousCount = previousCount;
		previousCount = currentCount;
	}

	return currentCount;
};
