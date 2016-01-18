function merge(arr1, arr2, result) {
    if(!result) {
        var result = [];
    }
    
  if (arr1.length === 0 && arr2.length === 0) {
    return result;
  }
  if(arr1[0] > arr2[0]) {
      result.push(arr2[0]);
      arr2 = arr2.slice(1);
  } else {
    result.push(arr1[0]);
    arr1 = arr1.slice(1);
  }
  return merge(arr1, arr2, result);
}
