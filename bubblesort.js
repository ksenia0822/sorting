function bubbleSort(arr) {
   for(var j = 0; j < arr.length; j++) {
       for(var i = 0; i < arr.length; i++) {
           if(arr[i] > arr[i+1]) {
               var temp = arr[i+1];
               arr[i+1] = arr[i];
               arr[i] = temp;
           }
       }
   }
   return arr;
}