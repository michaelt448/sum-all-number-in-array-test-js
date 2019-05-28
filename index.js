function sumItems(array) {
  const currentVal = array.pop()
  if(Array.isArray(currentVal)) {
    return sumItems(array) + sumItems(currentVal);
  }
  else if(currentVal === undefined) {
    return 0;
  }
  return currentVal + sumItems(array);
}
module.exports = sumItems;