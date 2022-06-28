// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    const nodes = [];
    let curr = list.head;
    while(curr){
        nodes.push(curr);
        curr = curr.next;
    }
    return nodes.length%2 === 0 ? nodes[(nodes.length/2) - 1] : nodes[Math.floor(nodes.length/2)]
}

module.exports = midpoint;
