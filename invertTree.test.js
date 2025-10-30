import invertTree from './invertTree'
import { TreeNode } from './data-structures'

describe('invertTree', () => {
  test('case 1', () => {
    // [5, 3, 8, 1, 7, 2, 6]
    const root = new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(7)), new TreeNode(8, new TreeNode(2), new TreeNode(6)))
    
    const result = invertTree(root)
    
    const expect = new TreeNode(5, new TreeNode(8, new TreeNode(6), new TreeNode(2)), new TreeNode(3, new TreeNode(7), new TreeNode(1)))
    expectSameTree(expect, result)
  })

  test('case 2', () => {
    // [6, 8, 9]
    const root = new TreeNode(6, new TreeNode(8), new TreeNode(9))
    
    const result = invertTree(root)
    
    const expect = new TreeNode(6, new TreeNode(9), new TreeNode(8))
    expectSameTree(expect, result)
  })

  test('case 3', () => {
    // [5, 3, 8, 1, 7, 2, 6, 100, 3, -1]
    const root = new TreeNode(5, new TreeNode(3, new TreeNode(1, new TreeNode(100), new TreeNode(3)), new TreeNode(7, new TreeNode(-1))), new TreeNode(8, new TreeNode(2), new TreeNode(6)))
    
    const result = invertTree(root)
    
    const expect = new TreeNode(5, new TreeNode(8, new TreeNode(6), new TreeNode(2)), new TreeNode(3, new TreeNode(7, null, new TreeNode(-1)), new TreeNode(1, new TreeNode(3), new TreeNode(100))))
    expectSameTree(expect, result)
  })

  test('case 4', () => {
    const root = null
    
    const result = invertTree(root)
    
    const expect = null
    expectSameTree(expect, result)
  })

  test('case 5', () => {
    const root = new TreeNode(-100)
    
    const result = invertTree(root)
    
    const expect = new TreeNode(-100)
    expectSameTree(expect, result)
  })

  test('case 6', () => {
    const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, new TreeNode(4))))
    
    const result = invertTree(root)
    
    const expect = new TreeNode(1, new TreeNode(2, null, new TreeNode(3, new TreeNode(4))))
    expectSameTree(expect, result)
  })

  function expectSameTree(root1, root2) {
    expect(isSameTree(root1, root2)).toBeTruthy()
  }

  function isSameTree(root1, root2) {
    if (root1 === null && root2 === null) return true
    if (root1 === null || root2 === null) return false
    if (root1.val !== root2.val) return false

    return isSameTree(root1.left, root2.left) && isSameTree(root1.right, root2.right)
  }
});

