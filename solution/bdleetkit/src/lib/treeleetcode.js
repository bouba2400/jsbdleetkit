/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
export const isSameTree = function (p, q) {
	if (p && q) {
		return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
	}

	if (p || q) {
		return false;
	}

	return true;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
export const isSubtree = function (root, subRoot) {
	if (root && subRoot) {
		return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
	}

	if (root || subRoot) {
		return false;
	}

	return true;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export const maxDepth = function (root) {
	if (!root) {
		return 0;
	}

	let leftmd = 0;
	let rightmd = 0;

	if (root.left) {
		leftmd = maxDepth(root.left);
	}

	if (root.right) {
		rightmd = maxDepth(root.right);
	}

	return leftmd > rightmd ? leftmd + 1 : rightmd + 1;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const invertTree = function (root) {
	if (!root) {
		return null;
	}

	const invertedLeft = invertTree(root.left);
	const invertedRight = invertTree(root.right);

	root.left = invertedRight;
	root.right = invertedLeft;

	return root;
};
