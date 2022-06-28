// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}
class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    add(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
    }
    remove(){
        if(!this.head) return undefined;
        let removedNode = this.head;
        this.head = removedNode.next;
        return removedNode.val;
    }
}

module.exports = Queue;
