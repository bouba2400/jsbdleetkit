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
export const hasCycle = function(head) {
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
