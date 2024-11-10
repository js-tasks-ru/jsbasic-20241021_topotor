function getMinMax(str) {
  let result = {};
  let arr = str.split(' ').map(item => Number(item));
  let newArr = arr.filter(item => isNaN(item) != true);
  result.max = Math.max(...newArr);
  result.min = Math.min(...newArr);
  return result;
}
