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

function split(arr) {
    var half = Math.floor(arr.length/2);
    var firstHalf = arr.slice(0,half);
    var secondHalf = arr.slice(half);

    return [firstHalf, secondHalf];
}

// split
// recurse mergeSort on arr[0] and arr[1]
// arr[0] = mersesotr(arr0)
//call merge on sorted arr[0] and arr[1]

function mergeSort(arr) {

 var leftAndRight =  split(arr);
 var left = leftAndRight[0];
 var right = leftAndRight[1];
 
 left = mergeSort(left);
 right = mergeSort(right);
 
 var finalArr = merge(left, right);
 
   if(left.length === 1 || right.length === 1) {
    return finalArr;
  }

}











