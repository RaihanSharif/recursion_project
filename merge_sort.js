function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);

  const lhs = arr.slice(0, middle);
  const rhs = arr.slice(middle);
  // lhs and rhs ok

  const sortedLeft = mergeSort(lhs);
  const sortedRight = mergeSort(rhs);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let result = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    } else {
      result.push(rightArr.shift());
    }
  }

  // if there is leftover in either array, just put it on
  // the end of the result array
  result = result.concat(leftArr);
  result = result.concat(rightArr);
  return result;
}

const unsortedArr = [4, 1, 5, 2, 66, 12];

const sortedArr = mergeSort(unsortedArr);

console.log(sortedArr);
