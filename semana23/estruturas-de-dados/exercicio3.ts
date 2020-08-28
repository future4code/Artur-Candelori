class Queue {
  public nodes: any[] = [];

  public isEmpty(): boolean {
    return this.nodes.length === 0;
  }

  public enqueue(value: any): void {
    this.nodes.length++;
    this.nodes[this.nodes.length - 1] = value;
  }

  public dequeue(): any {
    const removedNode = this.nodes[0];

    let i = 0;
    while (i < this.nodes.length - 1) {
      this.nodes[i] = this.nodes[i + 1];
      i++;
    }
    this.nodes.length--;

    return removedNode;
  }

  public print(): void {
    for (let i = 0; i < this.nodes.length; i++) {
      console.log(this.nodes[i]);
    }
  }
}
