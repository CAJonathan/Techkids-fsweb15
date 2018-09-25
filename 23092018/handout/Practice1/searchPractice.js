'use strict'

function search(input, target) {
  var start = 0;
  var end = input.length;

  if(end == 0){
    return -1;
  }

  while(start < end)
  {
    var mid = Math.floor((start + end) / 2);
    var candidate = input[mid];
    if(candidate == target){
      return mid;
    }
    else if (candidate > target) {
      end = mid - 1;
    }
    else{
      start = mid + 1
    }
  }
  if(input[start] == target){
    return start;
  }

  return -1;
}

module.exports = search
