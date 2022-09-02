#!/usr/bin/env node

'use strict';

// TEST DATA 1: 
// Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]

// TEST DATA 2:
// Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// Create a function 'checkDogs', which accept2 2 arrays of dog's aes ('dogsJulia' and 'dogsKate').

const checkDogs = function(dogsJulia, dogsKate) {
    // removes first and last two cats' age in Julias' dog's data
    
    // const dogsJuliacorrectData = dogsJulia.slice(1, -2);
    const dogsJuliacorrectData = dogsJulia.slice();
    dogsJuliacorrectData.splice(0, 1);
    dogsJuliacorrectData.splice(-2);
    
    // Create dogData with Julia's corrected and Kate's data
    const dogData = dogsJuliacorrectData.concat(dogsKate);
    
    // check whether dog is an adult(3years+) or puppy(-3years)
    dogData.forEach(function(dogAge, i) {
        if (dogAge >= 3) {
            console.log(`Dog number ${i + 1} is an adult, and is ${dogAge} years old`);
        } else {
            console.log(`Dog number ${i + 1} is still a puppy🐶`);
        }
    });    
}


console.log(`_____Data 1______`);
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log(`_____Data 2______`);
checkDogs([9, 16, 6, 8, 3],  [10, 5, 6, 1, 4]);
