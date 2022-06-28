// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    const values = [];
    let curr = list.head;
    while(curr){
        if(values.includes(curr.data)){
            return true
        } else {
            values.push(curr.data)
            curr = curr.next
        }
    }
    return false
}

module.exports = circular;
