console.log(binarSort([0,1,1,1,1,0,0,1,0,1,0,0,0,1,0]));

function binarSort(arr: Array<number>): Array<number> {
  let result: Array<number> = [];
  let zeroCount: number = 0;
  let oneCount: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    arr[i] === 0 ? zeroCount++ : oneCount++;
  }

  for (let i: number = 0; i < zeroCount; i++) {
    result.push(0)
  }
  
  for (let i: number = 0; i < oneCount; i++) {
    result.push(1)
  }

  return result;
}
