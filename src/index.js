module.exports = function multiply(first, second) {
  let arrRevFirst = first.split('').reverse();
  let arrRevSecond = second.split('').reverse();
  let stack = [];

  for (let i = 0; i < arrRevFirst.length; i++) {
    for (let j = 0; j < arrRevSecond.length; j++) {
      let m = arrRevFirst[i] * arrRevSecond[j];
      if (stack[i + j]) {
        stack[i + j] = stack[i + j] + m;
      } else {
        stack[i + j] = m;
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let num = stack[i] % 10;
    let move = Math.floor(stack[i] / 10);
    stack[i] = num;
    if (stack[i + 1]) {
      stack[i + 1] += move;
    } else if (move != 0) {
      stack[i + 1] = move;
    }
  }

  return stack.reverse().join('');
}
