class StackItem {
  public value: any;
  public next: StackItem | null = null;
}

class Stack {
  public start: StackItem | null = null;

  public isEmpty(): boolean {
    return this.start === null;
  }

  public push(item: StackItem): void {
    if (this.start === null) {
      this.start = item;
      return;
    }

    let node = this.start;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = item;
  }

  public pop(): StackItem | null {
    if (this.isEmpty()) {
      return null;
    }

    let lastItem = this.start;
    while (lastItem.next !== null) {
      lastItem = lastItem.next;
    }

    let secondToLastItem = this.start;
    while (secondToLastItem.next !== lastItem) {
      secondToLastItem = secondToLastItem.next;
    }
    secondToLastItem.next = null;

    return lastItem;
  }

  public printItems(): void {
    let item: StackItem = this.start;
    while (item.next !== null) {
      console.log(item);
      item = item.next;
    }
    console.log(item);
  }
}
