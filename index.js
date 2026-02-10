function separateLettersAndNumbers(str) {
  //   console.log(str);
  //   // split into array
  //   const arr = str.split('');
  //   console.log(arr);
  //   const result = [];
  //   let current;
  //   for (let i = 0; i < arr.length; i++) {
  //     result.push(arr[i]);
  //     if (typeof arr[i] !== typeof arr[i + 1]) {
  //       result.push('-');
  //     }
  //   }
  //   console.log(result);
  //   // this doesn't work because they are all strings atm
  //   //return str;

  // use regex to see what is going on...
  // make two capture groups...
  // const regex = /[(a-zA-Z)|(0-9)]/i
  // console.log(regex.test(str)) // returns true..

  return str.replace(/([a-zA-Z])(?=[0-9])|([0-9])(?=[a-zA-Z])/g, '$&' + '-');
}
