/* eslint-disable @stylistic/quotes */
/* eslint-disable unicorn/prefer-code-point */
/* eslint-disable unicorn/prefer-at */
/* eslint-disable unicorn/no-for-loop */
/**
 * @param {string} s
 * @return {boolean}
 */
export const hasEvenParentheses = function (s) {
	let stack = [];
	let even = false;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
			stack[stack.length] = s[i];
			even = false;
		} else {
			let match;

			switch (s[i]) {
				case ')': {
					match = '(';
					break;
				}

				case ']': {
					match = '[';
					break;
				}

				case '}': {
					match = '{';
					break;
				}
				// No default
			}

			if (stack.length > 0 && stack[stack.length - 1] === match) {
				stack = stack.slice(0, -1);
				even = stack.length === 0;
			} else {
				even = false;
				break;
			}
		}
	}

	return even;
};

/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function (s) {
	let ss = "";
	for (let i = 0; i < s.length; i++) {
		const l = s[i].toLocaleLowerCase();
		const c = l.charCodeAt(0);

		if ((c >= 48 && c <= 57) || (c >= 97 && c <= 122)) {
			ss += l;
		}
	}

	if (ss.length < 2) {
		return true;
	}

	let result = false;
	for (let i = 0; i < ss.length; i++) {
		const o = ss.length - 1 - i;
		if (ss[i] !== ss[o]) {
			break;
		}

		if (i >= o) {
			result = true;
			break;
		}
	}

	return result;
};

export const isPalindromeEfficiently = function (s) {
	if (s.length === 0) {
		return true;
	}

	let i = 0;
	let j = s.length - 1;
	let mismatch = false;
	while (i < j) {
		const l = s[i].toLocaleLowerCase();
		const r = s[j].toLocaleLowerCase();
		const lc = l.charCodeAt(0);
		const rc = r.charCodeAt(0);

		if (lc > 122 || (lc < 97 && lc > 57) || lc < 48) {
			i += 1;
			continue;
		}

		if (rc > 122 || (rc < 97 && rc > 57) || rc < 48) {
			j -= 1;
			continue;
		}

		if (lc !== rc) {
			mismatch = true;
			break;
		}

		i += 1;
		j -= 1;
	}

	return !mismatch;
};
