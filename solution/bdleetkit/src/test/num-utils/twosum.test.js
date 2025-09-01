import {twoSum} from '../../lib/num-utils.js';

function twoSumOfTwoEqualElementsSource() {
	const nums = [3, 3];
	const target = 6;
	const expectedResult = [0, 1];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: twoSumOfTwoEqualElementsSource');
	} else {
		console.log('Test Failed: twoSumOfTwoEqualElementsSource; actualResult:', actualResult);
	}
}

function twoSumOfMoreThanTwoElementSourceTargetingFirstTwo() {
	const nums = [2, 7, 11, 15];
	const target = 9;
	const expectedResult = [0, 1];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: twoSumOfMoreThanTwoElementSourceTargetingFirstTwo');
	} else {
		console.log('Test Failed: twoSumOfMoreThanTwoElementSourceTargetingFirstTwo; actualResult:', actualResult);
	}
}

function twoSumOfMoreThanTwoElementSourceTargetingLastTwo() {
	const nums = [3, 2, 4];
	const target = 6;
	const expectedResult = [1, 2];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: twoSumOfMoreThanTwoElementSourceTargetingLastTwo');
	} else {
		console.log('Test Failed: twoSumOfMoreThanTwoElementSourceTargetingLastTwo; actualResult:', actualResult);
	}
}

function twoSumOfMoreThanTwoElementSourceTargetingNonAdjacentTwo() {
	const nums = [30, 658, -587, -62, 3];
	const target = 596;
	const expectedResult = [1, 3];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: twoSumOfMoreThanTwoElementSourceTargetingNonAdjacentTwo');
	} else {
		console.log('Test Failed: twoSumOfMoreThanTwoElementSourceTargetingNonAdjacentTwo; actualResult:', actualResult);
	}
}

twoSumOfTwoEqualElementsSource();
twoSumOfMoreThanTwoElementSourceTargetingFirstTwo();
twoSumOfMoreThanTwoElementSourceTargetingLastTwo();
twoSumOfMoreThanTwoElementSourceTargetingNonAdjacentTwo();
