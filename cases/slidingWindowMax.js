function slidingWindowMax(nums, key) {
  let maxVal = 0;
  
  for (let i = 0; i <= nums.length - key; i++) {
      const window = nums.slice(i, i + key);
      let sum = 0;
      for (let j = 0; j < window.length; j++) {
          sum += window[j];
      }
      if (maxVal < sum) maxVal = sum;
  }
  
  return maxVal;
}

module.exports = slidingWindowMax;