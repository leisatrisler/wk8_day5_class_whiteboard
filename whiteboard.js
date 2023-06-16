const assert=require('assert');
// Write a function that take a string that contains capital
// and lower case characters and no spaces and no punctuation
// return true or false whether that string is a palindrome or not.
// A palindrome is a word that is spelled the same forwards and backwards.
//=====================================
// Write your function named "solution" here:
function solution(string){
    return string.toLowerCase().split("").reverse().join("") == string.toLowerCase()
}

//=====================================
try{
    assert(solution("racecar"));
    assert(solution("Radar"));
    assert(!solution("jackson"));
    assert(!solution("coding Temple"));
    assert(solution("Deified"));
    console.log("PASSED")
}catch{
    console.log("FAILED")
}finally{
    console.log("Thanks for Trying")
}






