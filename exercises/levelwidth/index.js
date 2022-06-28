// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const widths = [];
    function traverse(children){
        if(!children.length) return;
        widths.push(children.length);
        const nextChildren = [];
        for(let i = 0; i < children.length; i++){
            children[i].children.forEach(child => {
                nextChildren.push(child)
            })
        }
        traverse(nextChildren)
    }
    if(root) traverse([root]);
    return widths;
}

module.exports = levelWidth;
