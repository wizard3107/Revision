const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
let middleNode = function (node) {
    let slow = node;
    let fast = node;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
function reverse(node) {
    let curr = node;
    let prev = null;
    let next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    node = prev;
    return node;
}
// Complete the function below
var isPalindrome = function (head) {
    let curr = head;
    let mid = middleNode(curr)
    let rev = reverse(mid);
    while (curr !== mid) {
        if (curr.data !== rev.data) {
            return false
        }
        curr = curr.next;
        rev = rev.next;
    }
    return true
};
