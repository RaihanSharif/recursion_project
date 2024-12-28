function fibs(num) {
  const result = [0, 1, 1];

  for (let i = 3; i < num + 1; i++) {
    current = result[i - 1] + result[i - 2];
    result[i] = current;
  }
  return result;
}

console.log(fibs(7));

function fibsRec(n, firstCall = true) {
  if (n === 0) return firstCall ? 0 : [0];
  if (n === 1) return firstCall ? 1 : [0, 1];

  const previous = fibsRec(n - 1, false);
  const nextNum = previous[0] + previous[1];

  return firstCall ? nextNum : [previous[1], nextNum];
}

console.log(fibsRec(5));
