
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function deleteNode(head, position) {
    let curr = head;
    if (position === 0) {
        curr = curr.next;
        head = curr;
        return head;
    }
    let i = 0;
    while (i < position - 1) {
        curr = curr.next;
        i++;
    }
    let temp = curr.next;
    curr.next = temp.next;
    return head;
}

