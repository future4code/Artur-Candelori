function compressString(input: string): string {
  let newString: string = '';
  // newString = input[0]
  let n = 1;
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      n++;
    } else {
      newString += input[i - 1] + n;
      n = 1;
    }

    if (i === input.length - 1) {
      newString += input[i] + n;
    }
  }

  if (input.length > newString.length) {
    return newString;
  } else {
    return input;
  }
}

// 'aaa' -> a3
// 'aaab' -> aaab
// 'aabbb' -> a2b3
console.log(compressString('aaa'));
