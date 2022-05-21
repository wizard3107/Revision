
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let curr = head;
    let node = new LinkedListNode(data);
    //console.log(node)
    if (position === 0) {
        node.next = curr;
        head = node;
        return head;
    }
    let count = 0;
    while (count < position - 1) {
        curr = curr.next;
        count++;
        //   console.log(count,position)
    }
    // console.log(curr);
    let temp = curr.next;
    // console.log(temp);
    node.next = temp;
    // console.log(curr);
    curr.next = node;

    return head;
}

