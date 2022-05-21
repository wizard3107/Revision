
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below
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
var addTwoNumbers = function (l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let arr = [];
    let l3 = null, curr3 = null;
    let carry = 0;
    while (curr1 !== null || curr2 !== null) {
        let sum = (curr1 !== null ? curr1.val : 0) +
            (curr2 !== null ? curr2.val : 0)
            + carry;
        carry = Math.floor(sum / 10)

        if (carry === 1) {
            let node = new ListNode(sum % 10);
            if (l3 === null) {
                l3 = node;
                curr3 = node;
            }
            else {
                node.next = curr3;
                curr3 = node;
            }
        }
        else {
            let node = new ListNode(sum);
            if (l3 === null) {
                l3 = node;
                curr3 = node;
            }
            else {
                node.next = curr3;
                curr3 = node;
            }
        }
        curr1 = curr1 !== null ? curr1.next : curr1;
        curr2 = curr2 !== null ? curr2.next : curr2;
    }
    l3 = reverse(curr3)
    return l3

};

