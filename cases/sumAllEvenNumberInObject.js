function sumAllEvenNumberInObject(obj) {
  let sum = 0;
  const stack = [obj];

  while (stack.length > 0) {
    const currObj = stack.pop();

    for (const key in currObj) {
      const value = currObj[key];
      if (typeof value === 'object') {
        stack.push(value);
      } else if (typeof value === 'number' && value % 2 === 0) {
        sum += value;
      }
    }
  }
  
  return sum;
}

module.exports = sumAllEvenNumberInObject;