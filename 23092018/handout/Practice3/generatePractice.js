'use strict'

function generateObject(ArrayLength){

  let low = - Math.floor(ArrayLength / 2) - Math.floor(Math.random() * 50);
  let output = Math.floor(Math.random() * ArrayLength - 1);
  let testCase = {input : [], target : 0, output : 0};

  for(var j = 0 ; j < ArrayLength ; j ++){
    let delta = 1 + Math.floor(Math.random() * 40);
    low += delta;
    testCase.input.push(low);
  }
  testCase["target"] = testCase.input[output];
  testCase["output"] = output;
  
  return testCase;
}

function generate(testLengthArray){
  let testObject = [];

  for(let i = 0 ; i < testLengthArray.length ; i ++){
    let obj = generateObject(testLengthArray[i]);
    testObject.push(obj);
  }

  let randomPos = Math.floor(Math.random() * testLengthArray.length - 1);
  testObject[randomPos].target = testObject[randomPos].input[0] - 1;
  testObject[randomPos].output = -1;

  randomPos = Math.floor(Math.random() * testLengthArray.length - 1);
  testObject[randomPos].target = testObject[randomPos].input[0];
  testObject[randomPos].output = 0;

  randomPos = Math.floor(Math.random() * testLengthArray.length - 1);
  testObject[randomPos].target = testObject[randomPos].input[testObject[randomPos].input.length - 1];
  testObject[randomPos].output = testObject[randomPos].input.length - 1;

  return testObject;
}

module.exports = generate
