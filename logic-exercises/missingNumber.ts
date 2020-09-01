function findMissingNum(arr: number[]): number {
  const numObj: Num = {};

  for (let i = 1; i <= 100; i++) {
    numObj[i] = false;
  }

  for (let j = 0; j < arr.length; j++) {
    numObj[arr[j]] = true;
  }
  for (let num in numObj) {
    if (!numObj[num]) {
      return Number(num);
    }
  }
}

interface Num {
  [index: number]: boolean;
}

// const numArr = [];

// for (let k = 0; k < 100; k++) {
//   if (k !== 49) {
//     numArr.push(k + 1);
//   }
// }

// console.log(findMissingNum(numArr));
