
/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function (s) {
	if (!s) {
		return 0;
	}

	if (s.length < 2) {
		return s.length;
	}

	let done = false;
	let longestSsBegin = 0;
	let longestSsEnd = 0;
	let currentSsBegin = 0;
	let currentSsEnd = 0;
	let currentSsElementsIndex = {};

	while (!done) {
		if (currentSsElementsIndex[s[currentSsEnd]] === true) {
			if ((currentSsEnd - currentSsBegin - 1) > (longestSsEnd - longestSsBegin)) {
				longestSsBegin = currentSsBegin;
				longestSsEnd = currentSsEnd - 1;
			}

			currentSsBegin++;
			currentSsEnd = currentSsBegin;
			currentSsElementsIndex = {};
		} else {
			currentSsElementsIndex[s[currentSsEnd]] = true;
			currentSsEnd++;
		}

		if (currentSsEnd > (s.length - 1)) {
			done = true;
		}
	}

	if ((currentSsEnd - currentSsBegin - 1) > (longestSsEnd - longestSsBegin)) {
		longestSsBegin = currentSsBegin;
		longestSsEnd = currentSsEnd - 1;
	}

	return longestSsEnd - longestSsBegin + 1;
};

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function (s) {
	if (!s || s.length < 2) {
		return s;
	}

	let currentSsCenter = 0;
	let currentLeftPos = currentSsCenter;
	let currentRightPos = currentSsCenter;
	let longestPalSsBegin = currentLeftPos;
	let longestPalSsEnd = currentRightPos;
	let done = false;
	while (!done) {
		if (currentLeftPos < 0 || currentRightPos > s.length - 1 || s[currentLeftPos] !== s[currentRightPos]) {
			if ((currentRightPos - 1) - (currentLeftPos + 1) > longestPalSsEnd - longestPalSsBegin) {
				longestPalSsBegin = currentLeftPos + 1;
				longestPalSsEnd = currentRightPos - 1;
			}

			if (currentSsCenter < s.length - 1) {
				currentSsCenter++;
				currentLeftPos = currentSsCenter;
				currentRightPos = currentSsCenter;
			} else {
				done = true;
			}
		} else {
			currentLeftPos--;
			currentRightPos++;
		}
	}

	let currentSsNearCenter = 0;
	currentLeftPos = currentSsNearCenter;
	currentRightPos = currentSsNearCenter + 1;
	done = false;
	while (!done) {
		console.log(currentSsNearCenter, currentLeftPos, currentRightPos, longestPalSsBegin, longestPalSsEnd);

		if (currentLeftPos < 0 || currentRightPos > s.length - 1 || s[currentLeftPos] !== s[currentRightPos]) {
			if ((currentRightPos - 1) - (currentLeftPos + 1) > longestPalSsEnd - longestPalSsBegin) {
				longestPalSsBegin = currentLeftPos + 1;
				longestPalSsEnd = currentRightPos - 1;
			}

			if (currentSsNearCenter < s.length - 1) {
				currentSsNearCenter++;
				currentLeftPos = currentSsNearCenter;
				currentRightPos = currentSsNearCenter + 1;
			} else {
				done = true;
			}
		} else {
			currentLeftPos--;
			currentRightPos++;
		}
	}

	return s.slice(longestPalSsBegin, longestPalSsEnd + 1);
};
