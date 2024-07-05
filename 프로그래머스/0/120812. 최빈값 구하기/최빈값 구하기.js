function solution(array) {
  const maxVal = Math.max(...array);
  const newArray = new Array(maxVal + 1).fill(0);
  
  for (const num of array) {
    newArray[num] += 1;
  }

  const maxFrequency = Math.max(...newArray);
  
  let modeCount = 0;
  let mode = -1;
  
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === maxFrequency) {
      modeCount++;
      mode = i;
      if (modeCount > 1) return -1;
    }
  }

  return mode;
}