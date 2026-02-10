function separateLettersAndNumbers(str) {
  console.log(str);
  // split into array
  const arr = str.split('');
  console.log(arr);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if (typeof arr[i] !== typeof arr[i + 1]) {
      result.push('-');
    }
  }
  console.log(result);
  // this doesn't work because they are all strings atm
  //return str;
}
