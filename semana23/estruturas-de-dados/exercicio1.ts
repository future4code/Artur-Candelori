export class LinkedNode {
  public value: any;
  public next: LinkedNode | null = null;
}

class LinkedList {
  public start: LinkedNode | null = null;

  public addToTail(value: any): void {
    const newNode = new LinkedNode();
    newNode.value = value;

    if (this.start === null) {
      this.start = newNode;
      return;
    }

    let node = this.start;
    while (node.next !== null) {
      node = node.next;
    }

    node.next = newNode;
  }

  public printNodes(): void {
    let node: LinkedNode = this.start;
    while (node.next !== null) {
      console.log(node);
      node = node.next;
    }
    console.log(node);
  }
}

const linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
//console.log(1);
linkedList.printNodes();
