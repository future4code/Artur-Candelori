var Queue = /** @class */ (function () {
    function Queue() {
        this.nodes = [];
    }
    Queue.prototype.isEmpty = function () {
        return this.nodes.length === 0;
    };
    Queue.prototype.enqueue = function (value) {
        this.nodes.length++;
        this.nodes[this.nodes.length - 1] = value;
    };
    Queue.prototype.dequeue = function () {
        var removedNode = this.nodes[0];
        var i = 0;
        while (i < this.nodes.length - 1) {
            this.nodes[i] = this.nodes[i + 1];
            i++;
        }
        this.nodes.length--;
        return removedNode;
    };
    Queue.prototype.print = function () {
        for (var i = 0; i < this.nodes.length; i++) {
            console.log(this.nodes[i]);
        }
    };
    return Queue;
}());
