const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
function reverse(head) {
    let curr = head;
    let prev = null;
    let next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    head = prev;
    return head;
}


function nth_node(head, n) {
    let curr = head;
    let rev = reverse(curr)
    // console.log(rev);
    let i = 1;
    while (i < n) {
        //console.log(rev.data)
        rev = rev.next;
        i++;
    }
    return rev.data;
}
