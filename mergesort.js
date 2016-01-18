function merge(arr1, arr2, result) {
    if(!result) {
        result = [];
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
  console.log(result);
  merge(arr1, arr2, result);
 
}

// merge([1,3,5,7], [2,4,6,8])
// result = []
// result = [1]