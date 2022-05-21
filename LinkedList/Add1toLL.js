
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

var addOneToLinkedList = function (head) {
    let curr = head
    let temp = reverse(curr);
    head = temp;

    carry = 1
    var prev = null
    while (temp !== null) {
        var sum = temp.data + carry
        if (sum < 10) {
            temp.data = sum;
            carry = 0
            break;
        }
        else {
            var r = sum % 10
            carry = 1
            temp.data = r
        }
        prev = temp
        temp = temp.next
    }
    if (carry === 1) {
        let node = new LinkedListNode(1);
        prev.next = node;
    }
    // let ans = reverse(temp)
    // return ans
    return reverse(head)
};

