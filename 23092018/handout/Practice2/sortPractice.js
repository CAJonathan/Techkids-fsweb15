'use strict'

function partition (input, low, high) 
{ 
    let pivot = input[high];    
    let i = (low - 1);  
  
    for (let j = low; j < high; j++) 
    { 
        if (input[j] < pivot) 
        { 
            i++;  
            let temp = input[i];
            input[i] = input[j];
            input[j] = temp;
        } 
    } 
    let temp = input[i + 1]
    input[i + 1] = input[high];
    input[high] = temp;

    return (i + 1); 
} 

function qsort(input, low, high) {
  if (low < high) 
    { 
        let pi = partition(input, low, high); 
  
        qsort(input, low, pi - 1); 
        qsort(input, pi + 1, high); 
    } 
}

function sort(input){
  qsort(input, 0, input.length - 1);
  return input;
}

module.exports = sort
