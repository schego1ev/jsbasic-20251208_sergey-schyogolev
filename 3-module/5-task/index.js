function getMinMax(str) {
  let arr = str
    .split(' ')
    .filter(elem => parseFloat(elem))
    .sort((a, b) => a - b);

  return {
    min: Number(arr[0]),
    max: Number(arr[arr.length - 1]),
  };
}
