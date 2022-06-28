// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    insertFirst(data){
        const newNode = new Node(data);
        if(this.head){
            let head = this.head;
            newNode.next = head;
        }
        this.head = newNode;
    }
    size(){
        let counter = 0;
        let curr = this.head;
        while(curr){
            counter++;
            curr = curr.next;
        }
        return counter;
    }
    getFirst(){
        return this.head;
    }
}

module.exports = { Node, LinkedList };
