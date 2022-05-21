
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let node = new LinkedListNode(data)
    // console.log(node);
    let curr = head;
    if (curr === null) {
        head = node;
    }
    else {
        while (curr.next !== null) {
            curr = curr.next;
        }
        curr.next = node;
    }
    return head;
}

