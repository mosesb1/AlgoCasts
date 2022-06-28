// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data){
        let newNode = new Node(data);
        let currentNode = this;
        while(true){
            if(data < currentNode.data){
                if(currentNode.left){
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = newNode;
                    break;
                }
            } else {
                if(currentNode.right){
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = newNode;
                    break;
                }
            }
        }
    }
    contains(data){
        let currentNode = this;
        while(true){
            if(data === currentNode.data){
                return currentNode
            } else if (data < currentNode.data){
                if(currentNode.left){
                    currentNode = currentNode.left
                } else {
                    break;
                }
            } else {
                if(currentNode.right){
                    currentNode = currentNode.right;
                } else {
                    break;
                }
            }
        }
        return null;
    }
}

module.exports = Node;
