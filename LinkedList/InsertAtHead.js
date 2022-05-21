
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtHead(head, data) {
    let node = new LinkedListNode(data);
    let curr = head;
    node.next = curr;
    head = node;
    return head;

}

