var LinkedNode = /** @class */ (function () {
    function LinkedNode() {
        this.next = null;
    }
    return LinkedNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.start = null;
    }
    LinkedList.prototype.addToTail = function (value) {
        var newNode = new LinkedNode();
        newNode.value = value;
        if (this.start === null) {
            this.start = newNode;
            return;
        }
        var node = this.start;
        while (node.next !== null) {
            node = node.next;
        }
        node.next = newNode;
    };
    LinkedList.prototype.printNodes = function () {
        var node = this.start;
        while (node.next !== null) {
            console.log(node);
            node = node.next;
        }
        console.log(node);
    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.addToTail(1);
linkedList.addToTail(2);
//console.log(1);
linkedList.printNodes();
