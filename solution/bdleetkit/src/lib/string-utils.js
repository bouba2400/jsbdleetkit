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
