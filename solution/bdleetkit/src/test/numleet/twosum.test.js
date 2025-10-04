import {twoSum} from '../../lib/numleet.js';

function returnsZeroAndOneForEqualTwoElementArray() {
	const nums = [3, 3];
	const target = 6;
	const expectedResult = [0, 1];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: returnsZeroAndOneForEqualTwoElementArray');
		return true;
	}

	console.log('Test Failed: returnsZeroAndOneForEqualTwoElementArray; actualResult:', actualResult);
	return false;
}

function returnsZeroAndOneForComplementingFirstTwoElementsArray() {
	const nums = [2, 7, 11, 15];
	const target = 9;
	const expectedResult = [0, 1];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: returnsZeroAndOneForComplementingFirstTwoElementsArray');
		return true;
	}

	console.log('Test Failed: returnsZeroAndOneForComplementingFirstTwoElementsArray; actualResult:', actualResult);
	return false;
}

function returnsOneAndTwoForComplementingLastTwoElementsArray() {
	const nums = [3, 2, 4];
	const target = 6;
	const expectedResult = [1, 2];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: returnsOneAndTwoForComplementingLastTwoElementsArray');
		return true;
	}

	console.log('Test Failed: returnsOneAndTwoForComplementingLastTwoElementsArray; actualResult:', actualResult);
	return false;
}

function returnsOneAndThreeForComplementingNonAdjacentElementsArray() {
	const nums = [30, 658, -587, -62, 3];
	const target = 596;
	const expectedResult = [1, 3];
	const actualResult = twoSum(nums, target);
	console.log('result', actualResult);
	if (actualResult && actualResult.length === 2 && actualResult[0] === expectedResult[0] && actualResult[1] === expectedResult[1]) {
		console.log('Test Passed: returnsOneAndThreeForComplementingNonAdjacentElementsArray');
		return true;
	}

	console.log('Test Failed: returnsOneAndThreeForComplementingNonAdjacentElementsArray; actualResult:', actualResult);
	return false;
}

let passed = true;
passed = returnsZeroAndOneForEqualTwoElementArray() || passed;
passed = returnsZeroAndOneForComplementingFirstTwoElementsArray() || passed;
passed = returnsOneAndTwoForComplementingLastTwoElementsArray() || passed;
passed = returnsOneAndThreeForComplementingNonAdjacentElementsArray() || passed;

if (!passed) {
	throw new Error('One or more tests failed!');
}
