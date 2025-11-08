/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = function (head) {
	if (head === null) {
		return false;
	}

	let p1 = head.next;
	let p2 = head.next ? head.next.next : null;

	while (p1 !== null && p2 !== null && p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next ? p2.next.next : null;
	}

	return p1 !== null && p2 !== null && p1 === p2;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export const mergeTwoLists = function (list1, list2) {
	let mergedHead = null;

	if (list1 && list2) {
		let i = list1;
		let j = list2;
		let mergedTail = null;

		do {
			if (i.val < j.val) {
				if (mergedTail !== null) {
					mergedTail.next = i;
				}

				mergedTail = i;
				i = i.next;
			} else {
				if (mergedTail !== null) {
					mergedTail.next = j;
				}

				mergedTail = j;
				j = j.next;
			}
		}
		while (i && j);

		if (i) {
			mergedTail.next = i;
		} else if (j) {
			mergedTail.next = j;
		}

		mergedHead = list1.val < list2.val ? list1 : list2;
	} else if (list1) {
		mergedHead = list1;
	} else if (list2) {
		mergedHead = list2;
	}

	return mergedHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = function (head) {
	if (!head) {
		return null;
	}

	if (!head.next) {
		return head;
	}

	const reversedTailTail = head.next;
	const reversedTailHead = reverseList(head.next);
	reversedTailTail.next = head;
	head.next = null;

	return reversedTailHead;
};

export const reverseListAlternatively = function (head) {
	let i = head;
	let previous = null;
	let next;

	while (i) {
		next = i.next;
		i.next = previous;
		previous = i;
		i = next;
	}

	return previous;
};
