function invertTree(root) {
    if (root === null) return null

    let queue = [root]

    while (queue.length > 0) {
        const curr = queue[0]
        queue = queue.slice(1)

        if (curr.left) {
            queue.push(curr.left)
        }
        if (curr.right) {
            queue.push(curr.right)
        }

        const tmp = curr.left
        curr.left = curr.right
        curr.right = tmp
    }

    return root
}

function invertTree_recursive(root) {
    if (root === null) return null

    const left = invertTree(root.left)
    const right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}

export default invertTree