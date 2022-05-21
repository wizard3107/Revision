
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
function deleteNode(node) {
    let temp = node.next;
    //console.log(node);
    node.data = temp.data;
    node.next = temp.next;
    return node
}
