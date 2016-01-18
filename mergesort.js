function merge(arr1, arr2, result) {
    if(!result) {
        result = [];
    }
    
  if(arr1[0] > arr2[0]) {
      result.push(arr2[0]);
      arr2 = arr2.slice(1);

  } else {
    result.push(arr1[0]);
    arr1 = arr1.slice(1);
  }
  
  if(arr1.length < 1) {
      result = result.concat(arr2);
      return result;
  }
  
  if(arr2.length < 1) {
    result = result.concat(arr1);
     return result;
  }

 return merge(arr1, arr2, result);
 
}
