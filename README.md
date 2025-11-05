# Invert Binary Tree

A JavaScript implementation of the binary tree inversion algorithm.

Given a binary tree, the algorithm swaps the left and right children of every node.

### Example

```
Input:
     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Implementation Details

- **Time Complexity**: O(n) where n is the number of nodes
- **Space Complexity**: O(n) for the queue (iterative) or call stack (recursive)
