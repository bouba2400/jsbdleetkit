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

/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
	let result = 0;
	for (let i = 0; i < prices.length; i++) {
		let max = null;
		for (let j = i + 1; j < prices.length; j++) {
			if (max === null || prices[j] > max) {
				max = prices[j];
			}
		}

		const profit = max !== null && max > prices[i] ? max - prices[i] : 0;
		if (profit > result) {
			result = profit;
		}
	}

	return result;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfitEfficiently = function (prices) {
	if (prices.length < 2) {
		return 0;
	}

	let lowest = prices[0];
	let max = 0;

	for (let i = 1; i < prices.length; i++) {
		if (prices[i] < lowest) {
			lowest = prices[i];
		}

		const profit = prices[i] - lowest;
		if (profit > max) {
			max = profit;
		}
	}

	return max;
};
