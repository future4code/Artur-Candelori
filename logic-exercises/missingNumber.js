function findMissingNum(arr) {
    var numObj = {};
    for (var i = 1; i <= 100; i++) {
        numObj[i] = false;
    }
    for (var j = 0; j < arr.length; j++) {
        numObj[arr[j]] = true;
    }
    for (var num in numObj) {
        if (!numObj[num]) {
            return Number(num);
        }
    }
}
// const numArr = [];
// for (let k = 0; k < 100; k++) {
//   if (k !== 49) {
//     numArr.push(k + 1);
//   }
// }
// console.log(findMissingNum(numArr));
