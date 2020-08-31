// do último elemento até o primeiro
function printArrayBackwards(arr: any[]) {
  const n = arr.length;
  if (n > 0) {
    console.log(arr[n - 1]);
    arr.pop();
    printArrayBackwards(arr);
  }
}

//printArrayBackwards([1, 2, 3]);

// do primeiro ao último
function printArray(arr: any[]) {
  const n = arr.length;
  if (n > 0) {
    const lastElement = arr.pop();
    printArray(arr);
    console.log(lastElement);
  }
}

printArray([1, 2, 3]);
