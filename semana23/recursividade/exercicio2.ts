function sum(n: number): number {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(3));
